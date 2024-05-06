import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  useMapEvents,
} from "react-leaflet";
// import Leaflet from "leaflet";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
// import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from "@ionic/react";

import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";

//todo NEXT: implement heatmap with data from airhealth

/**
 * Trigger a 'resize' event when Page has finished rendering and animating, so leaflet map can read a consistent height value.
 */

function Map() {
  useIonViewDidEnter(() => {
    window.dispatchEvent(new Event("resize"));
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <div className="h-screen w-screen">
          <MapContainer
            className="min-h-screen min-w-screen h-screen w-screen w-full h-full"
            // className="min-h-screen min-w-screen"
            // className="h-screen w-screen"
            center={[51.505, -0.09]}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div> */}

        <div>
          <MapContainer
            className="h-screen w-screen"
            // className="min-h-screen min-w-screen"
            // className="min-h-screen min-w-screen"
            center={[51.505, -0.09]}
            zoom={14}
            // center={[48.137154, 11.576124]}
            // // center={[51.505, -0.09]}
            // zoom={13}
            // @ts-ignore
            gestureHandling={true}
            touchZoom={true}
            scrollWheelZoom={true}
            zoomControl={true}
            boxZoom={true}
          >
            <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={[
                [48.2, 11.62, 20],
                [48.0, 11.51, 10],
                [48.08, 11.7, 30],
                [48.11, 11.5, 40],
                [48.11, 11.6, 60],
                [48.137154, 11.576124, 100],
                // Add more points as needed
              ]}
              longitudeExtractor={(m) => m[1]}
              latitudeExtractor={(m) => m[0]}
              intensityExtractor={(m) => parseFloat(m[2])}
            />

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Map;
