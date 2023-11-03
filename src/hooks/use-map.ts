import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TCity } from '../types/city';

export default function useMap(mapRef: MutableRefObject<null>, city: TCity) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instanceMap = new Map(mapRef?.current, {
        center: {
          lat: city?.location.latitude,
          lng: city?.location.longitude,
        },
        zoom: city?.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      layer.addTo(instanceMap);

      setMap(instanceMap);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}
