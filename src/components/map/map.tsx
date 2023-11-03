import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/use-map';
import { TCity } from '../../types/city';
import { TLocation } from '../../types/location';

type MapProps = {
  city: TCity;
  points: TLocation[];
};

export default function Map({ city, points }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.latitude,
              lng: point.longitude,
            },
            {
              icon: defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, defaultCustomIcon]);

  return <section className="cities__map map" ref={mapRef}></section>;
}
