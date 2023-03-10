
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
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    return({
        from:{
            position:"relative",
            opacity:inView && "0",
            right:inView && !isMobile && "-300px",
            transform:inView && (!isMobile?"scale(1.15) rotate(90deg)" : "scale(1.1)") , 
        },
        to:{
            opacity:"1",
            right:"0",
            transform: !isMobile?"scale(1) rotate(0deg)" : "scale(1)",
        },
        config:{duration:1800,}
    })}



   