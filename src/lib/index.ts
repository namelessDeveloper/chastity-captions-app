export async function getConfig(gist:string, filename?:string){
  try {
    const data = await fetch(`https://api.github.com/gists/${gist}`)
    const json = await data.json()    
    const parsedData = JSON.parse(json.files[filename || "cyoa.json"].content)
    console.log(parsedData);
    return parsedData
  } catch (error) {
    console.error(error);
    return null
  }
}