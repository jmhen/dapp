import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';

const EditableContext = React.createContext<any>();

interface Item {
  key: string;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: string;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
    }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);

    useEffect(() => {
        if (editing) {
        inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async e => {
        try {
        const values = await form.validateFields();

        toggleEdit();
        handleSave({ ...record, ...values });
        } catch (errInfo) {
        console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
        <Form.Item
            style={{ margin: 0 }}
            name={dataIndex}
            rules={[
            {
                required: true,
                message: `${title} is required.`,
            },
            ]}
        >
            <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
        ) : (
        <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
            {children}
        </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        const { isPreview,items, columns } = this.props;
        
        this.columns=[...columns,{
            title: 'operation',
            dataIndex: 'operation',
            width: '10%',
            render: (text, record) =>
            this.state.dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)} disabled={isPreview}>
                <a>Delete</a>
                </Popconfirm>
            ) : null,
        }];
     
        
        this.state = {
        dataSource: items,
        count: items.length,
        };
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    };

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const { newData } = this.props;
        newData["key"]=count;
        this.setState({
        dataSource: [...dataSource, newData],
        count: count + 1,
        });
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
        ...item,
        ...row,
        });
        this.setState({ dataSource: newData });
    };

    render() {
        const { isPreview, itemName,summary } = this.props;
        const { dataSource } = this.state;
        const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
        };
        const columns = this.columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: record => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: this.handleSave,
            }),
        };
        });
        return (
        <div >
            <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 10 }} 
            scroll={{ x: true }}
            summary={summary}
            />
            {isPreview?null:<Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                Add Another {itemName}
            </Button>}
            
        </div>
        );
    }
}

export default EditableTable;