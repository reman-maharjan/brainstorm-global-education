export interface CountryChecklistData {
  name: string;
  slug: string;
  content: string;
}

export interface CountryChecklistResponse {
  id: number;
  collection: number;
  data: CountryChecklistData;
  created_at: string;
  updated_at: string;
}

