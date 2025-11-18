export interface FortniteItem {
  name: string;
  type: string;
  [key: string]: any;
}

export interface FortniteStoreEntry {
  items: FortniteItem[];
}