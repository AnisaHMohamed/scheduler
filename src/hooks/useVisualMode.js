import { useState, useCallback } from 'react'
  const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace) => {
    if (!replace) {
      setHistory(prev => ([...prev, mode]))
    }
    setMode(newMode);
  };

  const back = () => {
    if (history.length === 1) {
      return;
    }
    let historyArray = history.slice(0, history.length - 1)
    setHistory([...historyArray])
    setMode(history[history.length - 2])
  };


  return { mode, transition, back };
}

  export {useVisualMode}
  
  
  

  
  
// Create a transition function within useVisualMode that will take in a new mode and update the mode state with the new value.


// function useCustomHook() {
//   function action() {}

//   return { action };
// }


