import React, { useEffect, useState } from "react";

import {
  Authentication,
  GoogleAuth,
  User,
} from "@codetrix-studio/capacitor-google-auth";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";

const isAndroid = isPlatform("android");
const isIOS = isPlatform("ios");

import "@codetrix-studio/capacitor-google-auth";
import _ from "lodash";
// import { Plugins } from '@capacitor/core';
// client secret = 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

/**
 * web
 * create web project, set callback url
 * set meta tags
 *
 * ios
 * create ios project, set iosClientID
 *
 * android
 * create android project, BUT SET WEB CLIENTId
 * set correct SHA, release keystore not working, ONLY the DEBUG (strange)
 * see SHA: ./gradlew signInReport
 * add string.xml
 *
 */

const clientSecret = "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";

const Login = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      GoogleAuth.initialize({
        // clientId: clientID,
        // clientId: clientID,
        // scopes: ["profile", "email"],
        grantOfflineAccess: true,
      })
        .then((v) => {
          console.log("🏁 init", v);
        })
        .catch((err) => {
          console.log("🟥 err init", err);
        });
    })();
  }, []);

  const onLogin = () => {
    GoogleAuth.signIn()
      .then((user: User) => {
        console.log("🏁 onLogin", user);
        setUser(user);
      })
      .catch((err: any) => {
        console.log("🟥 err onLogin", err);
      });
  };
  const onLogout = () => {
    GoogleAuth.signOut()
      .then((res: User) => {
        console.log("🏁 onLogout", res);
      })
      .catch((err: any) => {
        console.log("🟥 err onLogout", err);
      });
  };

  const onRefresh = () => {
    GoogleAuth.refresh()
      .then((res: Authentication) => {
        console.log("🏁 onRefresh", res);
      })
      .catch((err: any) => {
        console.log("🟥 err Authentication", err);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="flex flex-col justify-center align-center gap-2">
          {user ? (
            <div>
              {_.map(user, (v, k) => {
                return <p key={k}>{`${k}: ${v}`}</p>;
              })}
            </div>
          ) : (
            <div
              onClick={() => {
                onLogin();
              }}
              className="py-2 px-4 rounded bg-blue-500 text-center text-white"
            >
              login google button here
            </div>
          )}

          <div
            onClick={() => {
              onLogout();
            }}
            className="py-2 px-4 rounded bg-blue-500 text-center text-white"
          >
            logout google button here
          </div>

          <div
            onClick={() => {
              onRefresh();
            }}
            className="py-2 px-4 rounded bg-blue-500 text-center text-white"
          >
            Refresh
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;

/**
 * 
 * google login onLogin ios
authentication: {refreshToken: "1//0gvssUDUW0eu4CgYIARAAGBASNwF-L9IrUigHYZCJ15iPlU…vEk6PhDHUQ4ubMeRXPPNpTMTQ7N4SsDr8puSxVQwavZPO3INo", idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZjZTExYWVjZjllYjE0MD…nYvqas4waz6UhIxkym2WRHCMuPmDj82NAdPdWSa4bRcGetAeA", accessToken: "ya29.a0Ad52N39Q9xJBk_uG7PzpRVMQNgohrVYpB33fy_TmVhJ…FWaCgYKASESARISFQHGX2MiBiJIfhMWZKqRxzBE9l36bw0171"}
email: "iqbaldhiaa@gmail.com"
familyName: "A"
givenName: "Iqbaldhia"
id: "111758174445952416684"
imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocIlTDgN4WwUa1o_VOb3Djhg7pYkMNPrl1zj-0fe_dAcjLU4BjvFgg=s100"
name: "Iqbaldhia A"
serverAuthCode: "4/0AeaYSHDUmAJmPRNq9qASRWxpBZuL1kiWgzjqNIW_k3jpnVeTm2xP91FmKY-k7SMAr183dg"

 */

/**
 * on login: 
 * 
 {
    "email": "iqbaldhiaa@gmail.com",
    "familyName": "A",
    "givenName": "Iqbaldhia",
    "id": "111758174445952416684",
    "imageUrl": "https://lh3.googleusercontent.com/a/ACg8ocIlTDgN4WwUa1o_VOb3Djhg7pYkMNPrl1zj-0fe_dAcjLU4BjvFgg=s96-c",
    "name": "Iqbaldhia A",
    "authentication": {
        "accessToken": "ya29.a0Ad52N386jxyEbBhl14xEWFBGwdYjRdzqekLJXYd_CTsHJv37pO5aK4I3jfZ01cVC2sNW_ayn6IvKr83mVZQGhJJCkeaybnCIuPvzVGJm3M9wUWQNwpTokLIJ2FiDiQ591yh4PJXjywpCrMN8t6VzJBUl3gGtEFHiSwaCgYKAVwSARISFQHGX2MiTKDrpt4xbKoy84bRRFSt7w0169",
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZjZTExYWVjZjllYjE0MDI0YTQ0YmJmZDFiY2Y4YjMyYTEyMjg3ZmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODA0NjY2NjUzMTM1LW42b2ExbXJpcWRlc2pqa2prOWpzMW8waTU0MnQzaGZhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODA0NjY2NjUzMTM1LW42b2ExbXJpcWRlc2pqa2prOWpzMW8waTU0MnQzaGZhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTExNzU4MTc0NDQ1OTUyNDE2Njg0IiwiZW1haWwiOiJpcWJhbGRoaWFhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiTzAyaGpOZmdueE1ZcEYzUWd2c2V4USIsIm5iZiI6MTcxMzQxNjc0NSwibmFtZSI6IklxYmFsZGhpYSBBIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lsVERnTjRXd1VhMW9fVk9iM0RqaGc3cFlrTU5QcmwxemotMGZlX2RBY2pMVTRCanZGZ2c9czk2LWMiLCJnaXZlbl9uYW1lIjoiSXFiYWxkaGlhIiwiZmFtaWx5X25hbWUiOiJBIiwiaWF0IjoxNzEzNDE3MDQ1LCJleHAiOjE3MTM0MjA2NDUsImp0aSI6IjYxYjU3NTUyYmZjOTBkYmEzMjBjZTIyZGFlYmJmZjk3MzIxOWRlNDIifQ.Z7I29dXdG8ernfCGq2zGaPrzA7pM4l1mL-2vI0l859iM0opKo7GRn6fA-IBP39aV4H63X1nAZAoh8WCiocKN4QoOB_nm7L0zYdF8Ns67YirNNYWDEmNJGwevGPtrnRaIM3Zx0uS3OQqsE5R2Zgouz0NOxp5cMjwND39kqo0e8F9pPItMs3poyQEb5kU2bs0AoZKxh8DvnAGnot82PyaAuUfLu4Fw2f0FFe4KgQREdeSlrL6jlJtowqdgKQ_ZtswwyouBmETyw0BGXSFHUthYKnFQnpRLTzAsPmnvkUMbVKEfjXZaitEFYkaQTnHov5kXb33C_ZbOF6BbUVLXHvFBBQ",
        "refreshToken": ""
    },
    "serverAuthCode": "4/0AeaYSHCim7o1hwOQP0T1bI6nHBqK6SvY18_r85CYPoow7Um6tRl4Va4r6gFEK4f7KaG_gw"
}
 */

/**
 * {
  "iss": "accounts.google.com",
  "sub": "111758174445952416684",
  "email": "iqbaldhiaa@gmail.com",
  "email_verified": true,
  "at_hash": "CYFTA_5TGjtYzUY5P9_f8A",
  "nbf": 1713418916,
  "name": "Iqbaldhia A",
  "picture": "https://lh3.googleusercontent.com/a/ACg8ocIlTDgN4WwUa1o_VOb3Djhg7pYkMNPrl1zj-0fe_dAcjLU4BjvFgg=s96-c",
  "given_name": "Iqbaldhia",
  "family_name": "A",
  "iat": 1713419216,
  "exp": 1713422816,
  "jti": "ed15cf84c5890400c9e67204fd4dc5d479ed9592"
}
 */

/**
 * on refresh:
 * 
 * {
    "accessToken": "ya29.a0Ad52N39F5upvVnIwczzwlMoPC4KI8kg1Z2jjBK9kdqYhzcIey-32VSJzN1LnWQB1QnmEhDsee1mN1DsiRKwIysyNawPP_2jV56oyA_m7QyLyKot8lxW3uCZ4_g10rJoGqaR32DBarZUDHc0dlJFN7EL6PTNDzyV99waCgYKAQ0SARISFQHGX2MikU1zSL-8Ja5WZW1TlezOJA0169",
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZjZTExYWVjZjllYjE0MDI0YTQ0YmJmZDFiY2Y4YjMyYTEyMjg3ZmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODA0NjY2NjUzMTM1LW42b2ExbXJpcWRlc2pqa2prOWpzMW8waTU0MnQzaGZhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODA0NjY2NjUzMTM1LW42b2ExbXJpcWRlc2pqa2prOWpzMW8waTU0MnQzaGZhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTExNzU4MTc0NDQ1OTUyNDE2Njg0IiwiZW1haWwiOiJpcWJhbGRoaWFhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiYnpfLUtuV2tHUmN4ZjFuNUNEV1dtQSIsIm5iZiI6MTcxMzQxODcwOSwibmFtZSI6IklxYmFsZGhpYSBBIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lsVERnTjRXd1VhMW9fVk9iM0RqaGc3cFlrTU5QcmwxemotMGZlX2RBY2pMVTRCanZGZ2c9czk2LWMiLCJnaXZlbl9uYW1lIjoiSXFiYWxkaGlhIiwiZmFtaWx5X25hbWUiOiJBIiwiaWF0IjoxNzEzNDE5MDA5LCJleHAiOjE3MTM0MjI2MDksImp0aSI6IjExODBlOTE0NGVjOWIxMGFkNThjZjBlZTIxMjVmMGQyMGM0OWI2ZDUifQ.gv8qA2qyll6NNHfk7snoFVQZV59_kyvdI_b8pdizexR1mH-0KsXAf6EUpCq2QAcJITYyOQaDWJAiTajAlvmonK8BpYRJ_TvKFTCGvACzm_zH-yiWIRw0IAdBLrGCB5kpV7UKx9A2TlIJeJ44E1uC9gQxE9GAK7oZrn0DX5OnHWYKeXCXRGaz_as5IgbF47jHab7j6XLzvsv5YTUjPYLFA1JjuWZAkLPJ-uWJpZe6VBCuUs-xZyhVdzxF4Ju-YbxUDQjDEdmIpCA7dCc5GEG4sCL5DEM5Y4a3RbXHXd20FxhPRzlZ52NIOVqpwPBYjxQVwUKwDADQbOY72V9fPV_BdQ",
    "refreshToken": ""
}
 */

/**
 * {
  "iss": "accounts.google.com",
  "sub": "111758174445952416684",
  "email": "iqbaldhiaa@gmail.com",
  "email_verified": true,
  "at_hash": "KzC1yXLSmxZ4-XZFFC7fhw",
  "nbf": 1713418992,
  "name": "Iqbaldhia A",
  "picture": "https://lh3.googleusercontent.com/a/ACg8ocIlTDgN4WwUa1o_VOb3Djhg7pYkMNPrl1zj-0fe_dAcjLU4BjvFgg=s96-c",
  "given_name": "Iqbaldhia",
  "family_name": "A",
  "iat": 1713419292,
  "exp": 1713422892,
  "jti": "17f5b77c188cd1e0892bb9892b06ade3acdea45e"
}
 */
