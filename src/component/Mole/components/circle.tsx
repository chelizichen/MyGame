import '../index.css'
import pic1 from '../../../assets/1.png'
import pic2 from '../../../assets/2.png'
import { Dispatch, useEffect, useReducer, useRef, useState } from 'react';
import { deepCopy } from '../../../func/deepCopy';
import Good from '../../../assets/mp3/good.mp3'

// import {AudioComponent} from './audio'
type CORE = 'STRAWBERRY'|'PINEAPPLE'
interface circle{
    index:number,
    bgColor:string,
    // src:string,
    isShow:boolean,
    core:CORE
}
interface ComponentProps
{
    disPatch:Dispatch<any>,
    isStart:boolean,
    core:number
}
function CIRCLEComponent(props:ComponentProps)
{
    const { disPatch,isStart,core } = props
    const Mp3Ref = useRef<HTMLAudioElement>({} as HTMLAudioElement)
    const [circleArray,SetCircle] = useState<circle[]>([
        {index:1,bgColor:'rgb(152, 194, 203)',isShow:false,core:'PINEAPPLE'},
        {index:2,bgColor:'rgb(152, 194, 203)',isShow:false,core:'STRAWBERRY'},
        {index:3,bgColor:'rgb(152, 194, 203)',isShow:false,core:'PINEAPPLE'},    
        {index:4,bgColor:'rgb(152, 194, 203)',isShow:false,core:'PINEAPPLE'},
        {index:5,bgColor:'rgb(152, 194, 203)',isShow:false,core:'PINEAPPLE'},
        {index:6,bgColor:'rgb(152, 194, 203)',isShow:false,core:'STRAWBERRY'},
        {index:7,bgColor:'rgb(152, 194, 203)',isShow:false,core:'PINEAPPLE'},
        {index:8,bgColor:'rgb(152, 194, 203)',isShow:false,core:'STRAWBERRY'},
        {index:9,bgColor:'rgb(152, 194, 203)',isShow:false,core:'STRAWBERRY'},
    ])
    useEffect(()=>{
        console.log("生命周期开始");
    },[])

    // 开始游戏
    // 随机添加数字
    useEffect(()=>{
        console.log("isStart 改变 刷新组件");
        if(isStart === true)
        {
            randomFruit()
        }
    },[isStart])

    useEffect(()=>{
        console.log('水果盘被改变了');
    },[circleArray])

    // 重新刷新一个
    function randomFruit(index?:number)
    {
        let newArray:typeof circleArray = deepCopy(circleArray)
        if(index !== undefined)
        {
            newArray[index - 1].isShow = false
        }
        let randomIndex = Math.floor(Math.random()*9)
        newArray[randomIndex].isShow = true;
        SetCircle(newArray)
    } 
    // 点击消失一个 重新创建一个
    function clickFruit(index:number,coreType:CORE)
    {
        randomFruit(index)
        if(isStart === true)
        {
            Mp3Ref.current.play()
            switch(coreType)
            {
                case"PINEAPPLE":
                    disPatch({type:coreType,data:1})
                    break;
                case"STRAWBERRY":
                    disPatch({type:coreType,data:1})
                    break;
                default:
                    break;
            }
        }
        else if(core > 0 && isStart === false)
        {
            alert("已经结束了")
        }
        else
        {
            alert("还没开始")
        }
    }

    return(
        <>
            <div className="bg">
                {/* 内容层 */}
                {/* <AudioComponent good={good}/> */}
                <audio controls ref={Mp3Ref} src={Good} className="mp3"></audio>
                <div className="content">
                    {
                        circleArray.map(el=>{
                            return (<div className="circle" style={{backgroundColor:el.bgColor}} key={el.index}>
                                <img className="imgPic" src={el.core=="STRAWBERRY"?pic1:pic2} 
                                    style={{
                                        display:el.isShow===true?"block":"none",
                                        cursor:el.isShow===true?"crosshair":"none",
                                    }}
                                    onClick={()=>clickFruit(el.index,el.core)}
                                ></img>
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}
export {
    CIRCLEComponent
}