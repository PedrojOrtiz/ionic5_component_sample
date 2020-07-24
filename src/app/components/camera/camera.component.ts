import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  @Input() icon: string;
  @Input() type:string;
  @Output() finish = new EventEmitter<any>();

  constructor(private camera: Camera, private loadingCtrl: LoadingController) { }

  ngOnInit() {}

  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

}
