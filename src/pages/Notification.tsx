import { PushNotifications } from "@capacitor/push-notifications";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect } from "react";

const Notification = () => {
  const addListeners = async () => {
    await PushNotifications.addListener("registration", (token) => {
      console.info("Registration token: ", token.value);
    });

    await PushNotifications.addListener("registrationError", (err) => {
      console.error("Registration error: ", err.error);
    });

    await PushNotifications.addListener(
      "pushNotificationReceived",
      (notification) => {
        console.log("Push notification received: ", notification);
      }
    );

    await PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification) => {
        console.log(
          "Push notification action performed",
          notification.actionId,
          notification.inputValue
        );
      }
    );
  };

  const registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === "prompt") {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== "granted") {
      throw new Error("User denied permissions!");
    }

    await PushNotifications.register();
  };

  const getDeliveredNotifications = async () => {
    const notificationList =
      await PushNotifications.getDeliveredNotifications();
    console.log("delivered notifications", notificationList);
  };

  const checkPermissions = async () => {
    await PushNotifications.checkPermissions();
  };

  useEffect(() => {
    (async () => {
      await addListeners();
      await registerNotifications();
    })();

    return () => {
      PushNotifications.removeAllListeners();
    };
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notification</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div>
          <IonButton onClick={() => getDeliveredNotifications()}>
            Get Delivered Notification
          </IonButton>
          <IonButton onClick={() => checkPermissions()}>
            Check Permission
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Notification;
