import Web3 from 'web3';
import { contractABI, byteCode } from '@/assets/abi';
import { history } from 'umi';



export async function createElection(values){
    var web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    const defaultAccount = accounts[0];

    const timestamp = values.deadline ;
    const rolename = web3.utils.asciiToHex(values.role); 
    const myContract = new web3.eth.Contract(contractABI);
    console.log(myContract);

    const newContractInstance = await myContract.deploy({
      data: byteCode,
      arguments: [timestamp, rolename]
    })
    .send({
        from: defaultAccount
    }, function(error){
      if(error){
        console.log(error);
        alert (`An Error has occured`);
      }
    })
    .then(function(newContractInstance){
      console.log(newContractInstance.options.address) // instance with the new contract address
      return newContractInstance;
    });

 
    for (let i = 0; i < values.members.length; i++){
      const item = values.members[i]
      console.log(item);
      const name = web3.utils.asciiToHex(item.name);
      const account = item.account;
      console.log(`adding ${name}`);
      const added = await newContractInstance.methods.addMember(name,account).send({from:defaultAccount},function(error){
        if(!error) {
          return true;
        } 
        else {
          console.log(error);
          return false
        }
      });
      console.log(added);
    }
    // values.members.forEach(({ name, account }) => {
    //   console.log(`adding ${name}`);
    //   const added = await newContractInstance.methods.addMember(web3.utils.asciiToHex(name),account).send({from:defaultAccount},function(error){
    //     if(!error) {
    //       return true;
    //     } 
    //     else {
    //       console.log(error);
    //       return false
    //     }
    //   });
    //   console.log(added);
    // });
    history.push("/enter/admin");
    alert(`The New Election is Successfully Created. \nYou can now access Election Details through the address: \n${newContractInstance.options.address}`);
    
      
}


export async function fetchElectionData({address}) {
    var web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0]
    const myContract = new web3.eth.Contract(contractABI, address)
    console.log(myContract);

    const name = await myContract.methods.getName().call({from:account},function(error,result){
      if(error) {
        console.log(error);
        return null;
      }
      else return result
    });
    console.log(name);

    const role = await myContract.methods.role().call();
    const list = await myContract.methods.getMemberList().call();
    const memberList = list.map(member=>web3.utils.hexToAscii(member));
    const totalMembers = await myContract.methods.memberCount().call();
    const deadline = await myContract.methods.deadline().call();
    const totalVoted = await myContract.methods.totalVoted().call();
    console.log(deadline);
    // const vote = await myContract.methods.getVote().call({from:account},function(error,result){
    //   if(error) {
    //     console.log(error);
    //     return null;
    //   }
    //   else return result
    // });
    // console.log(vote);
    
    const data = {
        contract:myContract,
        role:web3.utils.hexToAscii(role),
        name: web3.utils.hexToAscii(name),
        account:account,
        totalMembers:totalMembers,
        deadline:deadline,
        memberList:memberList,
        // vote:vote,
        totalVoted: totalVoted,
    }
    return data;
  }

  export async function vote({target,contract,account}) {
      const vote = await contract.methods.vote(target).send({from:account},function(error, transactionHash){
        if(!error) {
          console.log(`transactionHash:${transactionHash}`)
          return target;
        }
        else {
          console.log(error);
          return null;
        }
      });
      return vote;
  }

  export async function fetchResults({contract}) {
    const votes = await contract.methods.getResults().call(function(error){
      if(error){
        console.log(error);
      }
    });
    console.log(votes);

    return votes;

  }