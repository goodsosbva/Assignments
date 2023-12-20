export interface MemberData {
  imgurl: string
  name: string
  subdec: string
}

export interface Book {
  imgurl: string;
  name: string;
  subdec: string;
}

export interface NewbooksData {
  [key: string]: Book[];
}

export interface BookCategory {
  cata: string
  books: { booktit: string; author: string }[]
}

export interface HashType {
  text: string
  value: string
}

export interface MainBannerType {
  stitle: string,
  maintit: string,
  iconname: string,
  url: string,
}

export interface NoticelistsType {
  noticetit: string, date: string
}