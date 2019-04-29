import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {isLiked, abbreviate, shorten} from '../../helpers';
import { DzService } from '../../services/Dz.service';
import {EbusService} from '../../services/Ebus.service';
import {LikesService} from '../../services/Likes.service';
import { Song } from '../../models/song';
import { SearchResult } from '../../models/search-result';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnChanges {

  @Input() id: number;
  feed: SearchResult;
  loading = true;

  constructor(public dz: DzService, public ebus: EbusService, public love: LikesService) {}

  ngOnChanges(change) {
    if (!change.id) { return; }
    this.loading = true;
    this.dz.playlist(this.id).subscribe(data => {
      this.feed = data;
      this.loading = false;
    });
  }

  getBgImg(src: string) {
    return { backgroundImage: `url(${src})` };
  }

  shorten(a, b) {
    return shorten(a, b);
  }

  likeSong(song: Song) {
    if (isLiked(this.love.likes, song.id)) {
      this.love.unlikeSong(song);
    } else {
      this.love.likeSong(song);
    }
  }
  isLiked(a, b) {
    return isLiked(a, b);
  }

  cue(song: Song) {
    this.ebus.ebus.emit({song, autoplay: false});
  }

}
