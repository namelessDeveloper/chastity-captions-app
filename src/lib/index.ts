export async function getConfig(gist:string, filename?:string){
  try {
    const data = await fetch(`https://api.github.com/gists/${gist}`)
    const json = await data.json()    
    console.log(json);
    
    return JSON.parse(json.files[filename || "cyoa.json"].content)
  } catch (error) {
    return null
  }
}