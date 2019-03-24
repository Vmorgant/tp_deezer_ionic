import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DeezerServiceProvider} from "../../providers/deezer-service/deezer-service";
import {Artist} from "../../model/Artist";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  artists :Artist[];
  name :string ="";


  constructor(public navCtrl: NavController, public deezer : DeezerServiceProvider) {
  }

  getItems() {
    this.deezer.getArtist(this.name)
      .then( (rep)=>{
        this.artists=rep.data;
      })
      .catch((err)=>{
        console.log(JSON.stringify(err));
    });

  }

  getAlbum(name:string) {
    this.navCtrl.push('ListAlbumPage',{name:name});
  }
}
