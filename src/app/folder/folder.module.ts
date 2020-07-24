import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { CameraComponent } from '../components/camera/camera.component';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';
import { ShareComponent } from '../components/share/share.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage, CameraComponent, ImageUploadComponent, ShareComponent],
  exports: [CameraComponent, ImageUploadComponent, ShareComponent]
})
export class FolderPageModule {}
