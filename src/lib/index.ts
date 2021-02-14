
export interface GistFiles {
  [filename:string]: {
    content: string
    filename: string
  }
}

export interface GithubGist {
  description: string
  files: GistFiles
  owner: {
    login: string
  }
  id: string 
}


export async function getGist(gistId:string){
  try {
    const data = await fetch(`https://api.github.com/gists/${gistId}`)
    const json: GithubGist = await data.json()

    return {
      description: json.description,
      files: json.files,
      owner: json.owner,
      id: json.id
    }
  } catch (error) {
    console.error(error);
    throw error
  }
}