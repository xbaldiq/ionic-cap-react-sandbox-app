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

function Map() {
  return (
    <div>
      <MapContainer
        className="min-h-screen w-screen"
        center={[51.505, -0.09]}
        zoom={13}
        // @ts-ignore
        gestureHandling={true}
        touchZoom={true}
        scrollWheelZoom={true}
        zoomControl={true}
        boxZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      {/* <MapContainer
        // zoom={10}
        scrollWheelZoom={false} // only on certain key pressed on <MapHooks />
        style={{ maxHeight: "750px", height: "60vh", width: "100%" }}
        doubleClickZoom={false}
        attributionControl={false}
        zoomControl={false}
        touchZoom={true}
        boxZoom={false}
        // @ts-ignore
        gestureHandling={true}
        whenCreated={(map) => {
          // Workaround for https://github.com/elmarquis/Leaflet.GestureHandling/issues/75
          map.gestureHandling?._handleMouseOver?.();
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains={"abcd"}
          maxZoom={20}
          zIndex={2}
        />
      </MapContainer> */}
    </div>
  );
}

export default Map;
