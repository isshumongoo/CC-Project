import { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Header from './CCHeader'

const sections = [
  { title: 'Home', url: '/' },
  { title: 'My Account', url: '/Account'},
  { title: 'Privacy', url: '/Privacy'},
];

class MapContainer extends Component {
  render() {
    return(
      <>
      <Header title="Care Differently" sections={sections} />
      <Map
        google = {this.props.google}
        style = {{width:"60%", height:"100%",}}
        zoom = {75}
        initialCenter = {
          {
          lat: 39.750613,
          lng: -75.550564
          }
        }    
           
      />

      {/* Tried code for marker, does not work bc needs google prop. Whatever that means
      <Marker key="marker_1AIzaSyBTkEsd9nZlUuWBT3Y48d9Rl_Tj8jLrVng"
        
          position={{
          lat: 39.750613,
          lng: -75.550564
          }}

        />  */}
      </>
    );

  }
}
export default GoogleApiWrapper({
  apiKey:"AIzaSyBTkEsd9nZlUuWBT3Y48d9Rl_Tj8jLrVng"
})(MapContainer)