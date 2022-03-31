import '../index.css'
import pic1 from '../../../assets/1.png'
import pic2 from '../../../assets/2.png'
import { Dispatch, useEffect, useReducer, useState } from 'react';
import { deepCopy } from '../../../func/deepCopy';
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
    isStart:boolean
}
function CIRCLEComponent(props:ComponentProps)
{
    const { disPatch,isStart } = props
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

    function randomFruit()
    {
        let randomIndex = Math.floor(Math.random()*9)
        let newArray:typeof circleArray = deepCopy(circleArray)
        newArray[randomIndex-1].isShow = true;
        SetCircle(newArray)
    }   

    function clickFruit(index:number,coreType:CORE)
    {
        const newCirlce = deepCopy(circleArray)
        newCirlce[index-1].isShow = false
        SetCircle(newCirlce)
        randomFruit()
        if(isStart)
        {
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
        else
        {
            alert("还没开始")
        }
    }

    return(
        <>
            <div className="bg">
                {/* 内容层 */}
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