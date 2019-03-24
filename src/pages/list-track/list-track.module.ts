import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTrackPage } from './list-track';

@NgModule({
  declarations: [
    ListTrackPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTrackPage),
  ],
})
export class ListTrackPageModule {}
