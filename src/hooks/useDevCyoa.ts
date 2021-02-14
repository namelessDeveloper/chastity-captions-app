import { useEffect } from "react"

export function useDevCyoa(input:React.RefObject<HTMLInputElement>){
  /* eslint-disable react-hooks/rules-of-hooks*/
  if(process.env.NODE_ENV == 'development'){
    useEffect(() => {
      if(input.current)
        //https://gist.github.com/namelessDeveloper/f728c844cd509bd87b5edaff8c15be2b
        input.current.value = "e0c25f7527311226ca5c698ae6d04f38"
    }, [input])
  }
  /* eslint-enable react-hooks/rules-of-hooks*/
}