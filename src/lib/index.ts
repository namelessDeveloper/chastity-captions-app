export async function getConfig(gist:string){
  if(gist.length === 32){
    const data = await fetch(`https://api.github.com/gists/${gist}`)
    return await data.json()
  }
  if(gist.length === 0){
    return null
  }
  throw Error("Gist must be 32 characters long")
}