// import { useEffect, useRef } from 'react'
// import Good from '../../../assets/mp3/good.mp3'
// import '../index.css'
// interface ComponentProps
// {
//     good:boolean
// }
// function AudioComponent(props:ComponentProps)
// {
//     const {good} = props
//     let Mp3Ref = useRef<HTMLAudioElement>({} as HTMLAudioElement)
//     useEffect(()=>{
//         if(good)
//         {
//             Mp3Ref.current.play()
//         }
//         // console.log(Mp3Ref.current);
//         console.log(Mp3Ref);
//     },[])
    
//     return(
//         <div>
//             <audio controls ref={Mp3Ref} src={Good}>
//             </audio>
//         </div>
//     )
// }
// export {
//     AudioComponent
// }