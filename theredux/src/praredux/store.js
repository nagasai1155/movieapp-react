import { combineReducers, createStore } from "redux";
const initiaState = {
    username:'',
    password:'',
    balance:'',
    

}
const reducerfun= (state=initiaState,action)=>{
    switch(action.type){
        case "updatename":
            return {...state,username:action.payload}

            case 'password':
                return {...state,password:action.payload}

                case 'deposite':
                    return {...state,balance:state.balance+  +action.payload}

                    case "withdraw":
                        return {...state,balance:state.balance-  +action.payload}
                        default:
                            return {...state}
            
    }
}
const reducerfun1= (state=[],action)=>{

    switch(action.type){
        case 'add':
            return  [...state,{amount:action.payload.amount,type:action.payload.type,time:action.payload.time}]

        default:
            return state;

    }
}


let rootReducer = combineReducers({
    account:reducerfun,
    transaction:reducerfun1,
});


const store = createStore(rootReducer);
export default store;
console.log(store);
// store.dispatch({type:'updatename',payload:"nagasai"});
// console.log(store.getState());

// store.dispatch({type:'password',payload:'nagasaibalam'});
// console.log(store.getState());

// store.dispatch({type:'deposite',payload:1999});
// console.log(store.getState());
// store.dispatch({type:'withdraw',payload:1000});
// console.log(store.getState());

