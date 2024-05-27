export interface AnimeResponse {
  data: DataAnime[];
  pagination: Pagination;
}

export interface DataAnime {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: Demographic[];
  themes: Demographic[];
  demographics: Demographic[];
}

interface Aired {
  from: string;
  to: string;
  prop: Prop;
}

interface Prop {
  from: From;
  to: From;
  string: string;
}

interface From {
  day: number;
  month: number;
  year: number;
}

interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Title {
  type: string;
  title: string;
}

interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  items: Items;
}

interface Items {
  count: number;
  total: number;
  per_page: number;
}
