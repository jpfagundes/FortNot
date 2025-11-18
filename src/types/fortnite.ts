// ----------------------------
// Tipos base (cosméticos)
// ----------------------------
export interface FortniteItemType {
  value: string;
  displayValue: string;
  backendValue: string;
}

export interface FortniteRarity {
  value: string;
  displayValue: string;
  backendValue: string;
}

export interface FortniteSeries {
  value: string;
  image: string;
  colors: string[];
  backendValue: string;
}

export interface FortniteImages {
  smallIcon?: string;
  icon?: string;
  featured?: string;
}

// ----------------------------
// Item cosmético completo (brItems)
// ----------------------------
export interface FortniteBrItem {
  id: string;
  name: string;
  description?: string;

  type: FortniteItemType;
  rarity: FortniteRarity;

  series?: FortniteSeries;

  images?: FortniteImages;

  introduction?: {
    chapter?: string;
    season?: string;
    text?: string;
    backendValue?: number;
  };

  added?: string;
  [key: string]: any; // fallback opcional
}

// ----------------------------
// Entrada da loja
// ----------------------------
export interface FortniteStoreEntry {
  section?: any;
  bundle?: {
    name: string;
    info?: string;
    image?: string;
  };

  finalPrice?: number;
  regularPrice?: number;

  // O mais confiável
  brItems?: FortniteBrItem[];

  // Às vezes existe, mas é mais pobre
  items?: { name: string }[];

  [key: string]: any;
}