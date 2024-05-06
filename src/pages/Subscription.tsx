import React, { useState, useEffect } from "react";
import { Capacitor } from "@capacitor/core";
import "cordova-plugin-purchase/www/store.js";
import useIsMounted from "../utils/hooks/isUseMounted";
import _ from "lodash";
import Page from "../components/Page";

// change the productid to your own productis from google play console and apple developer store

// todo add subscription hooks in firebase function

const productIds = ["premium1month"];

const Subscription = () => {
  const { store, ProductType, LogLevel, Platform, Product } =
    window.CdvPurchase;
  const platformName =
    Capacitor.getPlatform() === "android"
      ? Platform.GOOGLE_PLAY
      : Platform.APPLE_APPSTORE;

  console.log("ℹ️ platformName", platformName);

  const isOwned = store.owned(productIds?.[0]);

  console.log("ℹ️ isOwned", isOwned);

  const [iapProducts, setIapProducts] = useState() as any;

  console.log("ℹ️ iapProduct", iapProducts);
  console.log("ℹ️ store", store);
  console.log("ℹ️ store.products", store.products);

  const isMounted = useIsMounted();

  document.addEventListener(
    "deviceready",
    () => {
      console.log("🚀 on device ready");
    },
    false
  );

  const onProductUpdateCB = (p) => {
    console.log("🟣 product updated ", p);
    refreshUI();
  };

  useEffect(() => {
    const setupStore = async () => {
      store.verbosity = LogLevel.DEBUG;

      console.log("🔵 after mounted");

      const productsToRegistered = _.map(productIds, (id) => ({
        type: ProductType.PAID_SUBSCRIPTION,
        id: id,
        platform: platformName,
      }));
      store.register(productsToRegistered);

      store
        .when()
        .productUpdated(onProductUpdateCB)
        .approved(finishPurchase)
        .receiptUpdated((receipt) =>
          console.log("🏁 on receipt update", receipt)
        )
        // .approved(transaction => transaction.verify())
        .verified(function (receipt) {
          console.log("🏁 on verified receipt", receipt);
          // var receiptInfo = receipt.;
          // checkReceipt(receiptInfo, function (result) {
          //   if (result["status"] == "active") {
          //     // ACTIVE SUBSCRIPTION
          //     receipt.finish();
          //   } else {
          //     // NOT ACTIVE
          //   }
          // });
        })
        .finished((transaction) => {
          console.log("ℹ️ on finished", transaction);
          console.log(
            "🏁 Products owned: " +
              transaction.products.map((p) => p.id).join(",")
          );
        })
        .receiptsReady((receipts) => {
          console.log("🏁 receiptsReady", receipts);
          console.log("ℹ️ store.verifiedReceipts", store.verifiedReceipts);
          console.log("ℹ️ store.localReceipts", store.localReceipts);
        })
        .receiptUpdated((localReceipt) => {
          console.log("🏁 receiptUpdated", localReceipt);
          for (const productId of productIds) {
            if (store.owned(productId)) {
              console.log(`VIA productIds: ${productId} is owned`);
            }
          }
          console.log("ℹ️ store.verifiedReceipts", store.verifiedReceipts);
          console.log("ℹ️ store.localReceipts", store.localReceipts);
        });

      // store
      //   .order(sub)
      //   .then(() => {
      //     console.log("order placed", store.get(productId));
      //   })
      //   .catch((error: Error) => {
      //     console.log("error purchased failed", error);
      //     setShowErrorAlert(true);
      //   });
      // .receiptUpdated((r) => updatePurchases(r));

      store.ready(() => {
        console.log("🟡 ready", store.products);
      });

      // store.monitor(transaction, (state) => {
      //   console.log("new state: " + state);
      //   // if (state === TransactionState.FINISHED)
      //   //   monitor.stop();
      // });

      await store
        .initialize([
          { platform: platformName, options: { needAppReceipt: false } },
        ])
        .then((res) => {
          console.log("🟩 on initialized", res);
        })
        .catch((e) => {
          console.log("🟥 error store initialized", e);
        });
    };

    setupStore();

    return () => {
      // clear store event listeners
      store.off(onProductUpdateCB);
      store.off(finishPurchase);
    };
  }, []);

  const finishPurchase = (product) => {
    console.log("🏁 finishPurchase");
    product.finish();
    // transaction.verify()
    refreshUI();
  };

  const refreshUI = () => {
    const products = _.map(productIds, (id) => store.get(id, platformName));

    setIapProducts(
      products
      // store.get(productId)
      // [store.get(productId, platformName)]
    );
  };

  const buyProduct = (product, productId) => {
    console.log("🟡 on buy product", productId);
    product
      .getOffer()
      .order()
      .then((r) => {
        console.log("🏁 onClosed window", r);
        console.log("🏁 order placed", store.get(productId));
      })
      .catch((error: Error) => {
        console.log("🟥 error purchased failed", error);
      });
  };

  const restoreProduct = () => {
    // log.info("restorePurchases()");
    store.restorePurchases();
  };

  return (
    <Page title={"Subscription"}>
      <div>
        <p className="text-xl text-center">Subscription: {`${isOwned}`}</p>
        <p className="text-xl text-center">Renewal: {`${isOwned}`}</p>

        {_.map(iapProducts, (product) => {
          console.log("🟢 product", product);
          return (
            <div key={product.id} className="bg-gray-100 p-2 rounded">
              <h1>{product?.title}</h1>
              <p>
                {product?.description ? `${product.description || ""}` : ""}
              </p>
              <pre>{product?.offers?.[0].pricingPhases?.[0].price}</pre>
              <button
                className="btn btn-primary btn-block mt-1"
                onClick={() => buyProduct(product, product.id)}
              >
                Purchase Product
              </button>
            </div>
          );
        })}

        <div className="flex align-center">
          <button
            className="btn btn-link btn-block mt-1 bg-green-100 p-2 rounded"
            onClick={() => restoreProduct()}
          >
            Restore Product
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Subscription;
