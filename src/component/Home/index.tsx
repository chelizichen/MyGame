import { useEffect, useRef, useState } from 'react';
import './index.css'
import { Intro } from './components/intro'
import { Hope } from './components/hope';
import { STH } from './components/sth';
import { Song } from './components/song';
import { NowTime } from './components/time';

//  Left 值
function Home(props:any)
{
    const TextNode = useRef({} as HTMLDivElement)
    const [currIndex,SetIndex] = useState<number>(0)
    const [NodeArray,SetNode] = useState<any[]>([])
    useEffect(()=>{
        console.log(' 生命周期初始化 HomeNode',TextNode);
        const newArray = []
        newArray.push(Intro,Hope,STH,Song,NowTime)
        SetNode(newArray)
    },[])
    function move(offSetValue:string)
    {
        console.log('HomeNode',TextNode.current.childNodes);
        (TextNode as any).current.childNodes[currIndex].style.right = offSetValue;
        (TextNode as any).current.childNodes[currIndex].style.opacity = '0%'
        // 等待 transition 执行完再去更改
        setTimeout(()=>{
            let index = currIndex
            if(index < NodeArray.length-1)
            {
                index ++
                SetIndex(index)
                return 
            }
            else
            {
                index=0
                SetIndex(index)
                for(let i =0;i<NodeArray.length;i++)
                {
                    (TextNode as any).current.childNodes[i].style.opacity = '100%';
                    (TextNode as any).current.childNodes[i].style.right = 0

                }
            }
        },2000)
    }
    return(
        <div className="home">
            <button onClick={()=>move('40%')}>点击测试事件</button>
            <div ref={TextNode}>            
                {
                    NodeArray.map((el,index)=>{
                        //  state currIndex 
                        return <div key={index} style={{display:index===currIndex?'block':'none'}} className="text">{el()}</div>
                    })
                }
            </div>
        </div>
    )
}
export {
    Home
}