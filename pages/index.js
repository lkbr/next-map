import { StaticGoogleMap, Marker } from "react-static-google-map"

export default () => (
  <StaticGoogleMap
    size="100x100"
    apiKey="AIzaSyDhIN9DJy48k6_CBRvLVjRA-gf1jJsGmPc" // temp
  >
    <Marker location="51.528308,-0.3817765" />
  </StaticGoogleMap>
)
