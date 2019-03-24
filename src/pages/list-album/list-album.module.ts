import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAlbumPage } from './list-album';

@NgModule({
  declarations: [
    ListAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(ListAlbumPage),
  ],
})
export class ListAlbumPageModule {}
