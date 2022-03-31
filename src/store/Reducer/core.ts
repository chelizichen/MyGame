type CORE = 'STRAWBERRY'|'PINEAPPLE'
interface actionType{
    type:CORE,
    data:number,
}
let initCore:number = 0
let CoreReducer = function(preState=initCore, action:actionType)
{
    const {type,data} = action
    switch(type)
    {
        case 'STRAWBERRY':{
            preState = preState + data
            return preState
        }
        case 'PINEAPPLE':{
            preState = preState + data * 2 +1
            return preState
        }
        default:{
            break;
        }
    }
}
export {
    CoreReducer,
    initCore
}