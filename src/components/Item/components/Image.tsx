export const Image: React.FC<{src:string, width?:number}> = ({src, width = 200}) => {

  return (
    <img src={src} style={{width:`${width}px`, height: "auto"}} />
  )
}