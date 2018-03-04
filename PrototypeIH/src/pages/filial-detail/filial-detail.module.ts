import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilialDetailPage } from './filial-detail';

@NgModule({
  declarations: [
    FilialDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FilialDetailPage),
  ],
})
export class FilialDetailPageModule {}
