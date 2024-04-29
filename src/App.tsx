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

import { playCircle, radio, library, search } from "ionicons/icons";

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
import Map from "./components/Map";
import Notification from "./pages/Notification";

setupIonicReact();

// social login
const App: React.FC = () => (
  <IonApp>
    <Notification />
  </IonApp>
);
// const App: React.FC = () => (
//   <IonApp>
//     {/* <Subscription /> */}
//     <IonReactRouter>
//       <IonTabs>
//         <IonRouterOutlet>
//           <Redirect exact path="/" to="/home" />
//           <Route
//             path="/home"
//             render={() => <ExploreContainer />}
//             exact={true}
//           />
//           <Route path="/payment" render={() => <Payment />} exact={true} />
//         </IonRouterOutlet>

//         <IonTabBar slot="bottom">
//           <IonTabButton tab="home" href="/home">
//             <IonIcon icon={playCircle} />
//             <IonLabel>Explorer</IonLabel>
//           </IonTabButton>

//           <IonTabButton tab="payment" href="/payment">
//             <IonIcon icon={radio} />
//             <IonLabel>Payment</IonLabel>
//           </IonTabButton>
//         </IonTabBar>
//       </IonTabs>
//     </IonReactRouter>
//   </IonApp>
// );

export default App;
