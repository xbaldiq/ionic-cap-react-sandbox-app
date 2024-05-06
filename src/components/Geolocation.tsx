import React, { useEffect, useState, useRef } from "react";
import { Geolocation as CapacitorGeolocation } from "@capacitor/geolocation";
import { Camera, CameraResultType } from "@capacitor/camera";

function Geolocation() {
  const [geolocation, setGeolocation] = useState() as any;

  const printCurrentPosition = async () => {
    const coordinates = await CapacitorGeolocation.getCurrentPosition();

    setGeolocation(coordinates);
  };

  useEffect(() => {
    printCurrentPosition();
  }, []);

  return (
    <div className="flex flex-column justify-center items-center">
      <p className="text-2xl">Coordinate:</p>
      <p>
        {`${geolocation?.coords?.latitude} - ${geolocation?.coords?.longitude}`}
      </p>
    </div>
  );
}

export default Geolocation;
