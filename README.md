# ionic5_component_sample
Component for sharing instantly a photo taken with the native camera
This is a component inside capacitor library.

## Installation / Project Set Up

Use the following commands in the root path of your project

```bash
npm i @ionic/pwa-elements
npm i @byteowls/capacitor-filesharer
```

Paste the following lines at the end of the main.ts file

```ts
import { defineCustomElements } from '@ionic/pwa-elements/loader';
  defineCustomElements(window);
```

Then, in my case I created a component named share inside my components folder by typing this in the root path, it creates 
a similar structure of a single page

```bash
ionic generate component components/shared
```

we have to add HttpClientModule in the imports inside app.module.ts

```ts
imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
```
Finally, inside the file share.components.ts we type our code

```ts
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

  }
```


## Results: 

![Test Image 1](https://github.com/PedrojOrtiz/ionic5_component_sample/blob/master/results/Screenshot%20(1).png)
![Test Image 2](https://github.com/PedrojOrtiz/ionic5_component_sample/blob/master/results/Screenshot%20(2).png)
![Test Image 3](https://github.com/PedrojOrtiz/ionic5_component_sample/blob/master/results/Screenshot%20(3).png)
![Test Image 4](https://github.com/PedrojOrtiz/ionic5_component_sample/blob/master/results/Screenshot%20(4).png)
