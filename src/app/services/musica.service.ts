import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  private api="https://api.deezer.com/search?q="
  private apilocal="http://127.0.0.1:3000/api/favorito"
  constructor(private http:HttpClient) { }
  search(nombre:string){
    return this.http.get(this.api+nombre);
  }
  agregarCancion(body:any){
    return this.http.post(this.apilocal,body);
  }
  obtenerCancion(){
    return this.http.get(this.apilocal)
  }
  eliminar(id:any){
    return this.http.delete(this.apilocal+"/"+id)
  }
}
