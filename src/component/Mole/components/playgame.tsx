import { useEffect, useMemo, useState } from "react"
interface ComponentProps{
    PropStartGame:Function
}
function PLAYGAME(props:ComponentProps)
{
    const {PropStartGame} = props
    let [currTime,setTime] = useState<number>(60)
    let [isExistTime,setExist] = useState<boolean>(false)
    function StartGame()
    {
        if(!isExistTime)
        {
            setExist(true)
            PropStartGame();
            let timer = setInterval(()=>{
                if(currTime !== 0 )
                {
                    setTime(currTime--)
                }
                else
                {
                    setTime(0)
                    clearInterval(timer)
                }
            },1000)
        }
        else
        {
            console.log('已经开始了');
        }

    }
    return(
        <div className="play">
            <button onClick={()=>StartGame()} className="playButton">开始游戏</button>
            <div className="playTime" style={{color:currTime <=10?"red":"black"}}>{ currTime }</div>
        </div>
    )
}
export {
    PLAYGAME
}