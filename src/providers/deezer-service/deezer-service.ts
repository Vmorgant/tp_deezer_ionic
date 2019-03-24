import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DataArtist} from "../../model/Artist";
import {DataAlbum} from "../../model/Album";
import {DataTrack} from "../../model/Track";

@Injectable()
export class DeezerServiceProvider {


  constructor(public http: HttpClient) {
  }

  public getArtist(name: string): Promise<DataArtist> {
    const url: string = "https://api.deezer.com/search/artist?q=" + encodeURI(name);
    return new Promise<any>(resolve => {
      let headers : HttpHeaders=new HttpHeaders();;
      this.http.get(url,{headers: headers}).subscribe(data =>{
        resolve(data);
      },error => {
        console.log(error);
      });
    })
  }

  public getAlbums(name: string): Promise<DataAlbum> {
    const url: string = "https://api.deezer.com/search/album?q=" + encodeURI(name);
    return new Promise<any>(resolve => {
      let headers : HttpHeaders=new HttpHeaders();
      this.http.get(url,{headers: headers}).subscribe(data =>{
        resolve(data);
      },error => {
        console.log(error)
      });
    })
  }
  public getTracks(name: string): Promise<DataTrack> {
    const url: string = "https://api.deezer.com/search/track?q=" + encodeURI(name);
    return new Promise<any>(resolve => {
      let headers : HttpHeaders=new HttpHeaders();
      this.http.get(url,{headers: headers}).subscribe(data =>{
        resolve(data);
      },error => {
        console.log(error)
      });
    })
  }
}
