import { createStore } from "redux";

const data = {
    name:'',
    balance :0,
    
    mobilenumber:null
}

function updataStoreValues(state=data,action){
    switch (action.type){
        case 'name': return {...state,name:action.payload};
        case 'withdraw' : return {...data ,balance:state.balance -   action.payload};
        case 'deposite': return {... data , balance:state.balance+  action.payload};
        case "mobileupdate":  return {...data,mobilenumber:action.payload};
        default:return {...state}
    }





}



const store = createStore(updataStoreValues);

export default store;
// console.log(store.getState());
// store.dispatch({type:"nam" ,payload:'nagasai'});
// console.log(store.getState());

// store.dispatch({type:"balanc",payload:3000})
// console.log(store.getState());

// store.dispatch({type:"plac",payload:"vishakapatnam"})
// console.log(store.getState());

