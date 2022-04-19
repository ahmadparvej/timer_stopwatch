import React from 'react'
import styles from './TimerSw.module.css'
const Stopwatch = () => {
    const [stopwatch, setStopwatch] = React.useState(0);
    const [btnName,setBtnName]=React.useState(true);
    const [intervalId,setIntervalId]=React.useState(0);
    let handleStart = () => {
        if(btnName){
            setBtnName(false);
        }else{
            setBtnName(true);
            setIntervalId(0);
        }
        if(!btnName){
            clearInterval(intervalId);
            return;
        }
        let id = setInterval(() => {
                setStopwatch(stopwatch =>{
                    return stopwatch+1;
                })
        },0);
        setIntervalId(id)
    }
    return (
        <div>
            <div><h1 className={styles.timers}>{stopwatch}</h1></div>
            <div>
                <button className={styles.start} onClick={handleStart}>{btnName?"START":"STOP"}</button>
                <button className={styles.reset} onClick={() => { setStopwatch(0) }}>RESET</button>
            </div>
        </div>
    )
}

export default Stopwatch