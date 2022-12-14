import * as React from "react";
import { render } from "react-dom";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1Ijoib2RpbmNvZGluZyIsImEiOiJjbGJuem1mOXgwdHJsM3BvZHdrcXgxY3p2In0._8eyRFFeQNl243UbxjtHXA"
    />
  );
}
export default Map;
