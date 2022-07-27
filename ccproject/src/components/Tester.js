// import React from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import { Marker } from '@react-google-maps/api';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// const containerStyle = {
//   width: '1500px',
//   height: '700px'
// };
// const center = {
//   lat: 39.7447,
//   lng: -75.5484
// };
// const position = {
//   lat: 39.7447,
//   lng: -75.5484
// };
// const onLoad = marker => {
//   console.log('marker: ', marker)
// }
// function MyComponent() {
//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyBTkEsd9nZlUuWBT3Y48d9Rl_Tj8jLrVng"
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={50}
//       >
//         <Marker
//         onLoad={onLoad}
//         position={position}
//         label={"Hi Jordan"}
//         icon={LocationOnIcon}
//       />
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   )
// }
// export default React.memo(MyComponent)