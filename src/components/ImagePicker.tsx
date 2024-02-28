import React, { useEffect, useState, useRef } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";
function ImagePicker() {
  const imageRef = useRef(null);
  const [image, setImages] = useState("");

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath || "";

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
    imageRef.current.src = imageUrl;
    setImages(imageUrl);

    console.log("imageUrl", imageUrl);
  };
  return (
    <div className="flex flex-col bg-red-800">
      <button onClick={() => takePicture()}>Take a picture</button>
      <div className="h-500 w-500 bg-gray-50">
        <image ref={imageRef} src={image} className="object-cover h-48 w-96" />
        <p>test</p>
      </div>
    </div>
  );
}

export default ImagePicker;
