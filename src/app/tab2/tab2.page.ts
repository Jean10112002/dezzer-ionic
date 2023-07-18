import { Component } from '@angular/core';
import { MusicaService } from '../services/musica.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
canciones!:any
  constructor(private readonly musicService:MusicaService) {
    this.cargar()
  }
  handleRefresh(event:any){
    this.cargar()
    event.target.complete();
  }
  cargar(){
    this.musicService.obtenerCancion().subscribe((data)=>{
      this.canciones=data;
    })
  }
  remove(id:any){
    this.musicService.eliminar(id).subscribe((data)=>{
      this.cargar()
    })
  }
}
