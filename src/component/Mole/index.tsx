import { useReducer, useState } from 'react'
import { CoreReducer, initCore } from '../../store/Reducer/core'
import {CIRCLEComponent} from './components/circle'
import { PLAYGAME } from './components/playgame'
function Mole()
{
    const [core,dispatch] = useReducer(CoreReducer,initCore)
    const [start,SetStart] = useState<boolean>(false)
    function StartGame()
    {  
        SetStart(start=> start===true?false:true)
    }
    return(
        <div>
            <div className="core"> 分数 {core} </div>
            <PLAYGAME PropStartGame={()=>StartGame()}/>
            <CIRCLEComponent disPatch={dispatch} isStart={start} core={core as number}/>
        </div>
    )
}
export {
    Mole
}