import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TCity } from '../types/city';
import leaflet from 'leaflet';

export default function useMap(mapRef: MutableRefObject<null>, city: TCity) {
  const [map, setMap] = useState<Map | null>(null);
  const [cityState, setCityState] = useState<string>('');
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instanceMap = leaflet.map(mapRef?.current, {
        center: {
          lat: city?.location.latitude,
          lng: city?.location.longitude,
        },
        zoom: city?.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instanceMap);

      setMap(instanceMap);
      setCityState(city.name);
      isRenderedRef.current = true;
    }

    if (city.name !== cityState && mapRef.current) {
      map?.setView({
        lat: city?.location.latitude,
        lng: city?.location.longitude,
      });
      setCityState(city.name);
    }
  }, [mapRef, city, cityState, map]);

  return map;
}
