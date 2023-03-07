
export const leftAnimateObject =(inView)=>{
return({
    from:{
        position:"relative",
        left:inView && "-300px",
        opacity:inView && "0.1"
    },
    to:{
        left:"0",
        opacity:"1"
    },
    config:{duration:1700}
})}

export const rightAnimateObject =(inView)=>{
    return({
        from:{
            position:"relative",
            right:inView && "-300px",
            transform: inView &&  "rotate(45deg)",
        },
        to:{
            right:"0",
            transform: "rotate(0deg)",
        },
        config:{duration:1800}
    })}

   