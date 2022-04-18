import React from 'react'

const Timer = () => {
    const [timer,setTimer]=React.useState(10);
    React.useEffect(()=>{
        let id=setInterval(() => {
            setTimer((t)=>{
                if(t===0){
                    clearInterval(id);
                    console.log("Interval cleared");
                    return t;
                }
                return t-1
            })
        }, 1000);
        return ()=>{
            clearInterval(id)
            console.log("Unmounted");
        }
    },[])
  return (
    <div>timer
        <div>{timer}</div>
        <div>
            <button>START</button>
            <button>RESET</button>
        </div>
    </div>

  )
}

export default Timer