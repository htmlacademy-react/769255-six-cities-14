import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../../../const';
import useMap from '../../../../hooks/use-map';
import { TCity } from '../../../../types/city';
import { TLocation } from '../../../../types/location';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  city: TCity;
  points: TLocation[];
  activeLocation: TLocation | undefined;
};

//Карта с локациями предложений
export default function Map({ city, points, activeLocation }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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
              icon:
                activeLocation?.latitude === point.latitude &&
                activeLocation.longitude === point.longitude
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, activeLocation]);

  return <section className="cities__map map" ref={mapRef}></section>;
}
