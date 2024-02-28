import React, { useEffect, useState, useRef } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import Map from "../components/Map";
import { Geolocation } from "@capacitor/geolocation";
import ImagePicker from "../components/ImagePicker";

const Home: React.FC = () => {
  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log("Current position:", coordinates);
  };

  useEffect(() => {
    (async () => {
      await printCurrentPosition();
    })();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ImagePicker />
        {/* <Map /> */}
        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
