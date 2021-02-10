export interface CYOA {
  type: "cyoa"
  sections: Array<Section>
}

export interface Section {
  type: selectionType,
  direction?: Direction
  items: Array<Item>
  // Used for leaving comments in the json 
  metadata?: any
}

export type Direction =| "column" | "row"
export type selectionType =| "single" | "multiple" | "none"
type Part =| Image | Text | Title

export interface Item {
  parts: Array<Part>
  direction?: Direction
  cost?: number
  height?: number
  width?: number
}

interface Image {
  type: "image"
  src: string
  width?: number
}

type Text =| Text1 | Text2

interface Text1 {
  type: "text"
  header: string
  body?: string
}

interface Text2 {
  type: "text"
  header?: string
  body: string
}

interface Title {
  type: "title"
  text: string
}









