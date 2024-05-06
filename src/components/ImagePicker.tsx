import React, { useEffect, useState, useRef } from "react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import _ from "lodash";
import { IonCol, IonImg } from "@ionic/react";

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      // source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + ".jpeg";
    const newPhotos = [
      {
        filepath: fileName,
        webviewPath: photo.webPath,
      },
      ...photos,
    ];
    setPhotos(newPhotos);
  };

  return {
    photos,
    takePhoto,
  };
}

function ImagePicker() {
  const imageRef = useRef(null);
  const [image, setImages] = useState("");

  const { photos, takePhoto } = usePhotoGallery();

  return (
    <div className="flex flex-col bg-red-800">
      <button onClick={() => takePhoto()}>Take a picture</button>
      {/* <button onClick={() => takePicture()}>Take a picture</button> */}
      <div className="h-500 w-500 bg-gray-50">
        {_.map(photos, (photo) => {
          return (
            <IonCol size="6" key={photo.filepath}>
              <IonImg src={photo.webviewPath} />
            </IonCol>
          );
        })}
      </div>
    </div>
  );
}

export default ImagePicker;
