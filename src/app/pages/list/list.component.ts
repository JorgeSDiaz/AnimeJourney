import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { AnimeService } from '../../core/services/anime.service';
import { Anime } from '../../core/models/anime';

interface columnData {
  field: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TableModule, InputIconModule, IconFieldModule, InputTextModule, ImageModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public animes: WritableSignal<Anime[]> = signal([]);

  constructor(private animeService: AnimeService) {}

  ngOnInit() {
    this.animeService.getAnime('naruto').subscribe(
      (animeResponse) => {
        const animes = animeResponse.data.map((anime) => {
          return this.animeService.transformResponse(anime);
        });

        this.animes.update((prev) => [...prev, ...animes]);
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('Completed');
        console.log(this.animes());
      }
    );
  }

  getFilterValue(event: any) {
    return event.target.value;
  }
}
