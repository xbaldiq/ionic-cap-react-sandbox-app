import { Redirect, Route } from "react-router-dom";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import {
  playCircle,
  radio,
  flame,
  map,
  logIn,
  notifications,
} from "ionicons/icons";

import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/global.css";
import Payment from "./pages/Payment";
import Subscription from "./pages/Subscription";
import ExploreContainer from "./components/ExploreContainer";
import Login from "./pages/Login";
import Notification from "./pages/Notification";
import MapContainer from "./pages/Map";
import CapacitorModule from "./pages/CapacitorModule";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" render={() => <Home />} exact={true} />

          <Route
            path="/capacitor-module"
            render={() => <CapacitorModule />}
            exact={true}
          />

          <Route path="/login" render={() => <Login />} exact={true} />

          <Route path="/map" render={() => <MapContainer />} exact={true} />

          <Route
            path="/subscription"
            render={() => <Subscription />}
            exact={true}
          />

          <Route
            path="/notification"
            render={() => <Notification />}
            exact={true}
          />
        </IonRouterOutlet>

        <IonTabBar
          slot="bottom"
          style={{
            overflowX: "scroll",
            justifyContent: "left",
          }}
        >
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={playCircle} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="capacitorModule" href="/capacitor-module">
            <IonIcon icon={radio} />
            <IonLabel>Capacitor Module</IonLabel>
          </IonTabButton>

          <IonTabButton tab="login" href="/login">
            <IonIcon icon={logIn} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>

          <IonTabButton tab="map" href="/map">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>

          <IonTabButton tab="subscription" href="/subscription">
            <IonIcon icon={flame} />
            <IonLabel>Subscription</IonLabel>
          </IonTabButton>

          <IonTabButton tab="notification" href="/notification">
            <IonIcon icon={notifications} />
            <IonLabel>Notification</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
