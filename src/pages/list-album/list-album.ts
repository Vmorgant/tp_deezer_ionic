import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DeezerServiceProvider} from "../../providers/deezer-service/deezer-service";
import {Album} from "../../model/Album";
@IonicPage()
@Component({
  selector: 'page-list-album',
  templateUrl: 'list-album.html',
})
export class ListAlbumPage {
  albums : Album[];
  name:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deezer : DeezerServiceProvider) {
    this.name=this.navParams.get("name");
    this.getAlbums();

  }

  getAlbums() {
    this.deezer.getAlbums(this.name)
      .then( (rep)=>{
        console.log(rep);
          this.albums=rep.data;
        })
      .catch((err)=>{
        console.log(JSON.stringify(err));
      });

  }
  getTracks(name:string) {
    this.navCtrl.push('ListTrackPage',{name:name});
  }
}
