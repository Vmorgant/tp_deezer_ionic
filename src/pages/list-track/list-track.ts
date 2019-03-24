import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Track} from "../../model/Track";
import {DeezerServiceProvider} from "../../providers/deezer-service/deezer-service";
import {StreamingAudioOptions, StreamingMedia} from "@ionic-native/streaming-media";


@IonicPage()
@Component({
  selector: 'page-list-track',
  templateUrl: 'list-track.html',
})
export class ListTrackPage {
  tracks : Track[];
  name:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deezer : DeezerServiceProvider,private streamingMedia: StreamingMedia) {
    this.name=this.navParams.get("name");
    this.getTracks();
  }
  getTracks() {
    this.deezer.getTracks(this.name)
      .then( (rep)=>{
        console.log(rep);
        this.tracks=rep.data;
      })
      .catch((err)=>{
        console.log(JSON.stringify(err));
      });
  }
  play(track:Track){
    let options: StreamingAudioOptions = {
      bgImage: track.album.cover_xl,
    };
   this.streamingMedia.playAudio(track.preview,options);
  }

}
