export interface OurClient {
  id: number;
  name: string;
  logo: string;
  url: string | null;
  created_at: string;
  updated_at: string;
}

export interface OurClientFilters {
  search?: string;
}
