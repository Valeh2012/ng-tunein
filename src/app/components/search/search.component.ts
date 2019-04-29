import { Component, HostBinding } from '@angular/core';
import { DzService } from '../../services/Dz.service';
import {shorten} from '../../helpers';
import { EbusService } from '../../services/Ebus.service';
import {Song} from '../../models/song';
import {SearchResult} from '../../models/search-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  @HostBinding('class') sClass = 'search animated fadeIn';


  constructor(private dz: DzService, private ebus: EbusService) { }
  term = '';
  searchResults: SearchResult = null;
  loading = false;

  search(e: Event) {
    this.loading = true;
    e.preventDefault();
    this.term = e.target[0].value;
    this.dz.search(this.term).subscribe(data => {
      this.searchResults = data;
      this.loading = false;
    });
  }
  cue(song: Song) {
    this.ebus.ebus.emit({song, autoplay: false});
  }
  getBgImg(src: string) {
    return { backgroundImage: `url(${src})` };
  }
  shorten(a, b) {
    return shorten(a, b);
  }

}
