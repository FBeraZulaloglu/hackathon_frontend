import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

function Button({color,bgColor,size,text,borderRadius,onClickEvent}) {
  const { setIsClicked, initialState } = useStateContext();
  return (
    
    <button type='button'
            style={{backgroundColor:bgColor,color,borderRadius}}
            className={`text-${size} p-3 hover:drop-shadow-xl`}
            onClick={() => setIsClicked(initialState)}
            >
              {text}
    </button>
  )
}

export default Button