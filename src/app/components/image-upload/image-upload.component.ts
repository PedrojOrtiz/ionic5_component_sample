import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {

  currentImage = null;
  @Input() icon: string;
  @Output() output = new EventEmitter<any>();

  constructor(private camera: Camera) { }

  ngOnInit() {}

  async uploadImage() {

    let options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    await this.camera.getPicture(options).then(data=>{
      this.output.emit(this.currentImage = 'data:image/jpeg;base64,'+data)
    });

  }

}
