
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

export const rightAnimateObject =(inView,compo)=>{
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    return({
        from:{
            position:"relative",
            right:inView && !isMobile && "-300px",
            transform:inView && (!isMobile?compo?"rotate(120deg)" :"scale(1.15) rotate(30deg)": "scale(1.15)") , 
        },
        to:{
            right:"0",
            transform: !isMobile? "scale(1) rotate(0deg)": "scale(1)",
        },
        config:{duration:1800,
            friction: 120,
            tension: 120,}
    })}

   