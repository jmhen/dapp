import { fetchElectionData, fetchResults,vote } from '@/services/blockchain.js';


export default {
  namespace: 'election',
  state: {
    election: null,
    role: null,
    name: null,
    account:null,
    totalMembers:0,
    deadline:"",
    memberList:[],

    vote: null,
    totalVoted:0,
    results:[],


  },
  reducers: {
    saveElectionDetails(state,{payload: data}){
      return {
          ...state,
          contract:data.contract,
          role:data.role,
          name:data.name,
          account:data.account,
          totalMembers:data.totalMembers,
          deadline:data.deadline,
          memberList:data.memberList,
          vote:data.vote,
          totalVoted:data.totalVoted
        }
    },
    saveVote(state,{payload: data}){
      console.log(data.memberList);
      return {
          ...state,
          vote:data
      }
  },
    saveResults(state,{payload: {memberList,votes}}){
        console.log(`memberList: ${memberList}`);
        console.log(`votes: ${votes}`);

        var sortable = [];
        var sortedResults = [];
        for (let i=0;i<votes.length;i++){
            console.log('pushing elements to sortable')
            if(votes[i]){
                //only push if votes > 0;
                sortable.push([memberList[i],votes[i]]);
            }      
        }
        console.log(`sortable: ${sortable}`);
        sortable.sort(function(first, second) {
            //Sort the array based on the second element
            return second[1] - first[1];
        })
        for (var i=0;i<sortable.length;i++){
          sortedResults.push({
            rank: i+1,
            name: sortable[i][0],
            votes: sortable[i][1],
          })
        }
        console.log(sortedResults);
        return {
            ...state,
            results:sortedResults
        }
    }
    
  },
  effects: {
    *fetchDetails({payload: address},{ call, put }) {
        console.log( "fetching Election Details");
        const data  = yield call(fetchElectionData, { address });
        console.log( `Election: ${data}`);
        yield put({ type: 'saveElectionDetails', payload: data });
      },

    *vote({payload: target},{select,call,put}){
        console.log( "submitting Vote");
        const contract = yield select(state => state.election.contract);
        const account = yield select(state => state.election.account);
        const data  = yield call(vote, { target,contract,account });
        console.log( `Vote: ${data}`);
        yield put({ type: 'saveVote', payload: data });

    },

    *fetchResults({},{ select, call, put }) {
        console.log( "fetching Election Results");
        const contract = yield select(state => state.election.contract);
        const memberList = yield select(state => state.election.memberList);
        const votes  = yield call(fetchResults, { contract });
        console.log( `Results: ${votes}`);
        yield put({ type: 'saveResults', payload: { memberList, votes } });
      },

  },
  subscriptions: {
    pathEvent({ dispatch, history }) {
      history.listen(({pathname,query}) => {  
        if (pathname === '/vote') {      
          console.log(`detect change in path: ${pathname}`) 
          console.log( `contract address: ${query.address}`)
          dispatch({ 
            type: 'fetchDetails',
            payload: query.address 
          });
        }
        if (pathname === '/results') {      
          console.log(`detect change in path: ${pathname}`) 
          dispatch({ 
            type: 'fetchResults'
          });
        }

      });
    },
  },

};