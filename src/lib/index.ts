export async function getConfig(gist:string, filename?:string){
  if(gist.length === 32){
    const data = await fetch(`https://api.github.com/gists/${gist}`)
    const json = await data.json()    
    return JSON.parse(json.files[filename || "cyoa.json"].content)
  }
  if(gist.length === 0){
    return null
  }
  throw Error("Gist must be 32 characters long")
}