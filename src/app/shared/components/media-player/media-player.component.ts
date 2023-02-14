import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  
  mockOver: any = {
    cover: 'https://www.lahiguera.net/musicalia/artistas/bad_bunny/disco/10439/bad_bunny_yhlqmdlg-portada.jpg',
    album: 'YHLQMDLG',
    name: 'La Santa'
  }
  
  constructor() { }

  ngOnInit(): void {

  }
}
