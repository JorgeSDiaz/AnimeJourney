import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimeResponse, DataAnime } from '../models/anime-response';
import { Anime } from '../models/anime';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  public transformResponse(animeResponse: DataAnime): Anime {
    return {
      images: {
        image_url: animeResponse.images['webp'].image_url,
        small_image_url: animeResponse.images['webp'].small_image_url,
        large_image_url: animeResponse.images['webp'].large_image_url,
      },
      title: animeResponse.title,
      title_english: animeResponse.title_english,
    };
  }

  public getAnime(animeName: string) {
    return this.http.get<AnimeResponse>(`https://api.jikan.moe/v4/anime?q=${animeName}&limit=5`);
  }
}
