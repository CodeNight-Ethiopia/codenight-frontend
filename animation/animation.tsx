import {easeOut, motion} from "framer-motion"

export const animation = {
    hidden:{
      opacity:0,
      y:300
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:0.75
      },
    },
    exit:{
        opacity:0,
        y:300,
        transition:{
            duration:0.7
          },
    }
}


export const scrollReveal = {
    hidden:{opacity:0,y:300,scale:0.5,transition:{
      duration:0.5
    }},
    show:{
      opacity:1,
      y:0,
      scale:1,
      transition:{
        duration:0.5
      }
    },
    exit:{
        opacity:0,
        y:300,
        transition:{
            duration:0.7
          },
    }
  }
