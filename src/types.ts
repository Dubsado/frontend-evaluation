export interface IPost {
  id: number;
  handle: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
}

export const dummyPost: IPost = {
  id: 1,
  handle: "dummy1",
  avatar: "dumm1Avatar",
  image: "dummyImg",
  likes: 2,
  caption: "dummyCap",
}