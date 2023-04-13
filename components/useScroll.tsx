import { useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"



export const useScrollHook = ()=>{

    const controls = useAnimation()
    const [element,view] = useInView({threshold:0.3})
  
   useEffect(()=>{
      if(view){
        controls.start("show")
    }
    else{
        controls.start("hidden")
    }
  
    },[element,view])

    return [element,controls]
}