import React, {Component} from 'react'
import {GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import CartografiaData from './../../config/cartografiaData'
import GoogleMapStyle from './../../config/googleMapStyle'

console.log(CartografiaData[0].spots)

const spotsDATA = CartografiaData[0].spots


const GoogleMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15.6}
    mapTypeId={process.env.MAP_ID}
    defaultCenter={{ lat: 9.9328777, lng: -84.0794605 }}
    defaultOptions={{ styles: GoogleMapStyle }}
  >
    {props.isMarkerShown && spotsDATA.map(spot => {
      return (<Marker key={spot.name} position={{ lat: spot.location[0], lng: spot.location[1] }} title={spot.name} label={spot.name} />)
    }) }
  </GoogleMap>
))

export default GoogleMapComponent