import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { AnimeService } from '../../core/services/anime.service';
import { Anime } from '../../core/models/anime';

interface columnData {
  field: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TableModule, InputIconModule, IconFieldModule, InputTextModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public animes!: Anime[];

  constructor(private animeService: AnimeService) {}

  ngOnInit() {
    this.animeService.getAnime('naruto').subscribe(
      (animeResponse) => {
        this.animes = animeResponse.data.map((animeResponse) =>
          this.animeService.transformResponse(animeResponse)
        );
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('Completed');
        console.log(this.animes);
      }
    );
  }

  getFilterValue(event: any) {
    return event.target.value;
  }
}
