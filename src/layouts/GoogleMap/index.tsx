import { useContext, useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { MapContext } from "../../contexts/GoogleMapContext";

export default function GoogleMap() {
  const { setMap } = useContext(MapContext);
  const [mapEl, setMapEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (mapEl) {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });

      loader.load().then(async () => {
        const { Map }: google.maps.MapsLibrary =
          (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;

        const map = new Map(mapEl, {
          center: {
            lat: -34.397,
            lng: 150.644,
          },
          scrollwheel: false,
          zoom: 8,
          disableDefaultUI: true,
          styles: [
            {
              featureType: "poi.business",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "poi",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
          ],
        });

        setMap(map);
      });
    }
  }, [mapEl, setMap]);

  return <div ref={setMapEl} style={{ height: "100vh", width: "100vw" }} />;
}
