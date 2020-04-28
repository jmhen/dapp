
export const contractAddress = "0xC9a06D9181f4fD63500f4259BcA8E89Fb536ebC2";

export const contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "target",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getVote",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "role",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "setupFinished",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "memberCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "deadline",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "bytes32"
			},
			{
				"name": "acct",
				"type": "address"
			}
		],
		"name": "addMember",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getResults",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "endElection",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMemberList",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "access",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "finishSetup",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalVoted",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"name": "rolename",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "member",
				"type": "address"
			}
		],
		"name": "LogVote",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "LogCreation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "name",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "account",
				"type": "address"
			}
		],
		"name": "LogMemberAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "oldOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnerSet",
		"type": "event"
	}
]

export const byteCode = "0x608060405234801561001057600080fd5b5060405160408061122e8339810180604052810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a73560405160405180910390a38160018190555080600281600019169055507f418efed94051230b03f775347bf07db17b99271cc6f32e4e5c1ee1ec9ab5fa4081836040518083600019166000191681526020018281526020019250505060405180910390a150506110cb806101636000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630121b93f146100e05780630242f3511461010d57806310055c1d1461013857806310e506a01461016b57806311aee3801461019a57806317d7de7c146101c557806329dcb0cf146101f85780634092e2c2146102235780634717f97c1461027457806359f78468146102e05780635f5d5f00146102f75780636fae3d761461036357806386f25e4d146103be578063893d20e8146103d5578063b3a2273f1461042c575b600080fd5b3480156100ec57600080fd5b5061010b60048036038101908080359060200190929190505050610457565b005b34801561011957600080fd5b50610122610744565b6040518082815260200191505060405180910390f35b34801561014457600080fd5b5061014d6108d0565b60405180826000191660001916815260200191505060405180910390f35b34801561017757600080fd5b506101806108d6565b604051808215151515815260200191505060405180910390f35b3480156101a657600080fd5b506101af6108e9565b6040518082815260200191505060405180910390f35b3480156101d157600080fd5b506101da6108ef565b60405180826000191660001916815260200191505060405180910390f35b34801561020457600080fd5b5061020d610a3e565b6040518082815260200191505060405180910390f35b34801561022f57600080fd5b506102726004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a44565b005b34801561028057600080fd5b50610289610d31565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102cc5780820151818401526020810190506102b1565b505050509050019250505060405180910390f35b3480156102ec57600080fd5b506102f5610e36565b005b34801561030357600080fd5b5061030c610f13565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561034f578082015181840152602081019050610334565b505050509050019250505060405180910390f35b34801561036f57600080fd5b506103a4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f6f565b604051808215151515815260200191505060405180910390f35b3480156103ca57600080fd5b506103d3610f8f565b005b3480156103e157600080fd5b506103ea611070565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561043857600080fd5b50610441611099565b6040518082815260200191505060405180910390f35b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151561053e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001807f596f752068617665206e6f2061636365737320746f207468697320656c65637481526020017f696f6e2e0000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16151515610603576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f596f75206861766520616c726561647920766f7465642e00000000000000000081525060200191505060405180910390fd5b6001600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff02191690831515021790555080600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555060016009828154811015156106b657fe5b906000526020600020016000828254019250508190555060016005600082825401925050819055507fd66fd10d93c3fcf37a27c11c0e12214976632505c7954b53c023093d843fc1c433604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151561082d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001807f596f752068617665206e6f2061636365737320746f207468697320656c65637481526020017f696f6e2e0000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16151561088857600080fd5b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154905090565b60025481565b600660009054906101000a900460ff1681565b60045481565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156109d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001807f596f752068617665206e6f2061636365737320746f207468697320656c65637481526020017f696f6e2e0000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050600881815481101515610a2d57fe5b906000526020600020015491505090565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f43616c6c6572206973206e6f74206f776e65720000000000000000000000000081525060200191505060405180910390fd5b600a60009054906101000a900460ff16151515610b2457600080fd5b6001600a60006101000a81548160ff0219169083151502179055506001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060606040519081016040528060045481526020016000151581526020016000815250600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff02191690831515021790555060408201518160020155905050600882908060018154018082558091505090600182039060005260206000200160009091929091909150906000191690555060096000908060018154018082558091505090600182039060005260206000200160009091929091909150555060016004600082825401925050819055506000600a60006101000a81548160ff0219169083151502179055507ff87c6bb9c2eca0309887d0b2665f00e7f6bc58ba78a9bf94e66a5ddc699d67ee82826040518083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15050565b60606004546005541480610d46575060015442115b1515610de0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001807f54686520456c656374696f6e20526573756c74732063616e6e6f74206265207081526020017f75626c6973686564207965742e0000000000000000000000000000000000000081525060400191505060405180910390fd5b6009805480602002602001604051908101604052809291908181526020018280548015610e2c57602002820191906000526020600020905b815481526020019060010190808311610e18575b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610efa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f43616c6c6572206973206e6f74206f776e65720000000000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b60606008805480602002602001604051908101604052809291908181526020018280548015610f6557602002820191906000526020600020905b81546000191681526020019060010190808311610f4d575b5050505050905090565b60036020528060005260406000206000915054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611053576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f43616c6c6572206973206e6f74206f776e65720000000000000000000000000081525060200191505060405180910390fd5b6001600660006101000a81548160ff021916908315150217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600554815600a165627a7a7230582079f21ba3b57a339d9453ba79b8f13dcac2f001790835b27694e88959627ded8c0029"