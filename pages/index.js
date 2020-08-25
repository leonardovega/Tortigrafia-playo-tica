import GoogleMapComponent from './../components/googleMap/googleMap'

const Index = () => <>
  <h1>Tortigrafía Playo/tica</h1>
  <GoogleMapComponent isMarkerShown
  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCmbN0IDFVik3LfjZ3UGZCfxaWdhJHzBoA&v=3.exp&libraries=geometry,drawing,places`}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `80vh` }} />}
  mapElement={<div style={{ height: `100%` }} />}/>
</>

export default Index