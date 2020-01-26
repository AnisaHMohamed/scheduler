import { useState, useCallback } from 'react'

  
function useVisualMode (mode) {
  const [visualMode, setVisualMode] = useState(mode)
  return {mode}
}


//  return an object with a property mode

export default useVisualMode