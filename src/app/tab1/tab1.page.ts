import { Component } from '@angular/core';
import { MusicaService } from '../services/musica.service';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  canciones!: any;
  search!: string;
  constructor(private readonly musicService: MusicaService,private router:Router) {}
  onClick() {
    this.musicService.search(this.search).subscribe((data: any) => {
      this.canciones = data.data;
    });
  }
  add(cancion:any) {
    const body={
      title:cancion.title,
      name:cancion.artist.name,
      preview:cancion.preview,
      picture:cancion.artist.picture
    }
    this.musicService.agregarCancion(body).subscribe((data:any)=>{
      alert('se agregó')
    })
  }
  irAFavoritos(){
this.router.navigate(['tabs/tab2'])
  }
}
