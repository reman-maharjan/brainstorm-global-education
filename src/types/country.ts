export interface CountryData {
  name: string;
  slug: string;
  Image: string;
  image: string;
  Country: string;
  content: string;
  Desription: string;
  thumbnail_image: string;
}

export interface Country {
  id: number;
  collection: number;
  data: CountryData;
  created_at: string;
  updated_at: string;
}

export interface CountryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Country[];
}
