import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  
  mockOver: TrackModel = {
    cover: 'https://www.lahiguera.net/musicalia/artistas/bad_bunny/disco/10439/bad_bunny_yhlqmdlg-portada.jpg',
    album: 'YHLQMDLG',
    name: 'La Santa',
    url:'http://localhost/track.mp3',
    _id: '1'
  }
  
  constructor() { }

  ngOnInit(): void {

  }
}
