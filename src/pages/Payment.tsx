import React from "react";
import "cordova-plugin-purchase";
import {
  IonAlert,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// Some imports omitted.

const Payment: React.FC = () => {
  //   const history = useHistory();

  // These are wrappers for useState() hooks.
  //   const [isLoading, setIsLoading] = useLoading();
  //   const [showErrorAlert, setShowErrorAlert] = useAlert();
  //   const [showCancelledAlert, setShowCancelledAlert] = useAlert();
  //   const [showSuccessAlert, setShowSuccessAlert] = useAlert();

  //   const [isVerifying, setIsVerifying] = useStateBoolean();

  //   const userObject = useUserObject();
  //   const queryClient = useQueryClient();

  const { store, ProductType, Platform, LogLevel } = CdvPurchase;

  const monthly = store.get("");
  // const annual = store.get(MyProduct.SubAnnual);

  const buySub = (sub: CdvPurchase.Offer) => {
    const productId = sub.id;
    setIsLoading(true);
    // https://bobbyhadz.com/blog/typescript-check-if-value-exists-in-enum
    const allProductsValues = Object.values(MyProduct);
    if (allProductsValues.includes(productId)) {
      // console.log('placing order for ', productId);
      store.applicationUsername = () => userObject.id;
      store
        .order(sub)
        .then(() => {
          console.log("order placed", store.get(productId));
        })
        .catch((error: Error) => {
          console.log("error purchased failed", error);
          setShowErrorAlert(true);
        });
    } else {
      const errorMessage = `Product is invalid: ${productId}`;
      throw new Error(errorMessage);
    }
  };
  // User closed the native purchase dialog
  store.when().productUpdated((product) => {
    console.log("Purchase cancelled", product);
    setIsLoading(false);
    setShowCancelledAlert(true);
  });

  // Upon approval, show a different message.
  store.when().approved((product) => {
    console.log("Purchase approved", product);
    setIsVerifying(true);
  });

  // Upon the subscription becoming owned.
  store.when().finished((product) => {
    console.log("Purchase now owned", product);
    queryClient
      .invalidateQueries({ queryKey: ["myKey"] })
      .then(() => setShowSuccessAlert(true));
  });

  // const onClickCancelNotDuringVerify = () => {
  //   setIsLoading(false);
  // };

  // const onClickCancelDuringVerify = () => {
  //   setIsVerifying(false);
  //   setIsLoading(false);
  // };

  // console.log('monthly', monthly);
  // console.log('annual', annual);
  // Todo: Show a message if the free trial is in progress.
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={"my-route"} />
          </IonButtons>
          <IonTitle>Test Payment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* {!userObject.hasAccessPaidFeatures(myCookie) && (
          <BlockSubscriptionExpired />
        )} */}
        <p>Mobile store</p>
        {/* {isLoading && !isVerifying && (
          <>
            <p>Please wait...</p>
            <ButtonStoreCancel onClick={onClickCancelNotDuringVerify} />
          </>
        )} */}
        {/* {isLoading && isVerifying && (
          <>
            <p>Please wait...</p>
            <ButtonStoreCancel onClick={onClickCancelDuringVerify} />
          </>
        )} */}
        {/* {!isLoading && !isVerifying && monthly && annual && (
          // <ListSubscriptions
          //   monthly={monthly}
          //   annual={annual}
          //   buySub={buySub}
          //   setIsLoading={setIsLoading}
          // />
          <div>payment subs:</div>
        )} */}
        {/* <IonAlert
          isOpen={showErrorAlert}
          onDidDismiss={() => setShowErrorAlert(false)}
          message={tAlertMessagePurchaseFailed}
          buttons={["OK"]}
        />
        <IonAlert
          isOpen={showCancelledAlert}
          onDidDismiss={() => setShowCancelledAlert(false)}
          message={tAlertMessagePurchaseCancelled}
          buttons={["OK"]}
        />
        <IonAlert
          isOpen={showSuccessAlert}
          onDidDismiss={() => {
            history.push(routeTabWelcome);
          }}
          message={tAlertMessagePurchaseSuccess}
          buttons={["OK"]}
        /> */}
      </IonContent>
    </IonPage>
  );
};

export default Payment;
