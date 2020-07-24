import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Share } = Plugins;

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {

  @Input() icon: string;
  @Output() output = new EventEmitter<any>();

  constructor(private http: HttpClient, private camera: Camera) { }

  ngOnInit() {}

  async shareImage() {

    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    await Share.share( {
      title: 'Check my image',
      url: image.path,
    })

    //this.output.emit("Ok")

  }

}
