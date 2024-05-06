import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Geolocation from "../components/Geolocation";
import ImagePicker from "../components/ImagePicker";
import "./Home.css";

const CapacitorModule: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Capacitor Module</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Capacitor Module</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-col p-2">
            <Geolocation />
          </div>

          <div className="flex flex-col p-2">
            <p className="text-2xl text-center">Image Picker + Camera</p>
            <ImagePicker />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CapacitorModule;
