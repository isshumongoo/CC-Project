// import { Component } from 'react';
// // import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import Header from './CCHeader'
import { useRef, useState } from 'react'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from "@react-google-maps/api";
import { Box, Button, ButtonGroup, Flex, HStack, IconButton, Input, Skeleton, Text } from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import Stack from '@mui/material/Stack';
import hospital from './image.png';
import { requirePropFactory } from '@mui/material';

// class MapContainer extends Component {
//   render() {
//     const {isLoaded} = useJsApiLoader({
//       googleMapsApiKey: "AIzaSyCUwJMi0vW-jDpqv3fqOoSkGnWtLSq5ohk"
//     })

//     const center = { lat: 39.750613, lng: -75.550564 }
  
//     if (!isLoaded){
//       return <SkeletonText />
//     }

//     return(
//       <>
//       <Header title="Care Differently" sections={sections} />
      
//       <GoogleMap center = {center} zoom={15} mapContainerStyle={{width:"60%", height:"100%"}}>
//       </GoogleMap>

//       {/* <Map
//         google = {this.props.google}
//         style = {{width:"60%", height:"100%",}}
//         zoom = {100}
//         initialCenter = {
//           {
//           lat: 39.750613,
//           lng: -75.550564
//           }
//         }    
           
//       /> */}

//       {/* Tried code for marker, does not work bc needs google prop. Whatever that means
//       <Marker key="marker_1AIzaSyBTkEsd9nZlUuWBT3Y48d9Rl_Tj8jLrVng"
        
//           position={{
//           lat: 39.750613,
//           lng: -75.550564
//           }}

//         />  */}
//       </>
//     );

//   }
// }
// export default GoogleApiWrapper({
//   apiKey:"AIzaSyBTkEsd9nZlUuWBT3Y48d9Rl_Tj8jLrVng"
// })(MapContainer)

const sections = [
  { title: 'Home', url: '/' },
  { title: 'My Account', url: '/Account'},
  { title: 'Privacy', url: '/Privacy'},
];

const center = { lat: 39.750613, lng: -75.550564 }
const parish = { lat: 39.750280, lng: -75.554850 }

function Map() {
  
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:  "AIzaSyCUwJMi0vW-jDpqv3fqOoSkGnWtLSq5ohk",
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded){
    return (
      <Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack>
    )
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    <>
    <Header title="Care Differently" sections={sections} />
    
    <Box position='absolute' left={20} top={130} h='90%' w='85%'>
      <GoogleMap center = {center} zoom={15} mapContainerStyle={{width:"85%", height:"90%"}}>
        <Marker position={center} icon = {"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}/>
        <Marker position={parish} icon = {"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}/>
      </GoogleMap>
    </Box>
    <Flex
      position='absolute' left={280} top={130}
      flexDirection='column'
      // alignItems='center'
      h='30vh'
      w='40vw'
    >
    <Box
        p={4}
        borderRadius='lg'
        m={4}
        // bgColor='#62A2FF'
        bgColor='#bbdaa4'
        shadow='base'
        minW='container.md'
        zIndex='1'
      >
        <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type='text' placeholder='Origin' ref={originRef} />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button backgroundColor='#81B622' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </HStack>
      </Box>
    </Flex>
    </>
  );
}

export default Map;