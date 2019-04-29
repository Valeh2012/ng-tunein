import { Component, OnInit, HostBinding } from '@angular/core';
import Genres from '../../static/GenresMap';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  @HostBinding('class') discover = 'Discover';
  constructor() {
    this.getGenre(2098157264, 132);
  }

  genres = Genres;
  genreId: number;
  playlistId: number;


  ngOnInit() {
  }

  getGenre(playlistId: number, genreId: number) {
    this.playlistId = playlistId;
    this.genreId = genreId;
  }

}
