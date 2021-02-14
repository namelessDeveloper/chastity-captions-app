import { useRef } from "react";

export function useConstructor(callback = () =>  {}) {
  const firstExecution = useRef(true)
  if(firstExecution.current){
    firstExecution.current = false
    callback()
  }
}