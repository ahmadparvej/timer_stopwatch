import React from "react";
import Timer from './components/Timer'
import Stopwatch from './components/Stopwatch'
import styles from './components/TimerSw.module.css'
function App() {
  const [toggle,setToggle]=React.useState(true);
    console.log(toggle);
  return (
    <div className="App">
      <h1>Timer/Stopwatch</h1>
      <p>Building such a good timer stopwatch app like google timer</p>
      <div className={styles.toggler}>
        <div>
          <button className={styles.togglerBtn} onClick={()=>setToggle(true)}>Timer</button>
          <button className={styles.togglerBtn} onClick={()=>setToggle(false)}>Stopwatch</button>
        </div>
      <div>{toggle?<Timer/>:<Stopwatch/>}</div>
      </div>

    </div>
  );
}

export default App;
