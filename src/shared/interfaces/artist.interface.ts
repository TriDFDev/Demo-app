
export interface artist {
    id: number
    name: string
    image: string
}

export type artistState = {
    artists : artist[]
}

export type artistAction = {
    type: string
    artist : artist
}

export type DispatchType = (args: artistAction) => artistAction