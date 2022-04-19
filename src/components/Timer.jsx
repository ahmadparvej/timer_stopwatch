import React from 'react'
import styles from './TimerSw.module.css'

const Timer = () => {
    const [timer,setTimer]=React.useState(20);
    let handleStart = ()=>{
        let id=setInterval(() => {
            setTimer((timer)=>{
                if(timer===0){
                    clearInterval(id);
                    console.log("Interval cleared");
                    return timer;
                }
                return timer-1
            })
        }, 1000);
    }
  return (
    <div>
        <div><h1 className={styles.timers}>{timer}</h1></div>
        <div>
            <button className={styles.start} onClick={handleStart}>START</button>
            <button className={styles.reset} onClick={()=>setTimer(20)}>RESET</button>
        </div>
    </div>
  )
}

export default Timer