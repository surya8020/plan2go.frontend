import { GoogleMap, useLoadScript, MarkerF, PinElement, AdvancedMarkerElement } from "@react-google-maps/api";
import { useMemo } from 'react'


export default function Map() {

    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyCiIkFYdjoPKHuvDmLr4skVLFDyWBcC83E" })
    // const options = useMemo(
    //     () => ({
    //         mapId: 'b8b56c8ae00e14a2',
    //         disableDefaultUI: true,
    //         clickableIcons: false
    //     }),
    //     []
    // );
    if (!isLoaded) return <div>Loading...</div>
    return (
        <GetMap />
    )
}


const center = { lat: 47.6131419, lng: -122.3 }

function GetMap() {
    return (
        <GoogleMap zoom={9} center={center} mapContainerClassName="map-container"
            options={
                {
                    disableDefaultUI: true,
                    mapId: 'b8b56c8ae00e14a2',
                    draggable: true,
                    keyboardShortcuts: false,
                    scaleControl: true,
                    scrollwheel: true
                }
            }
        >
            <MarkerF position={center} />
        </GoogleMap >)
}