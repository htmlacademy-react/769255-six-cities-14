import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../../const';
import useMap from '../../../hooks/use-map';
import { TCity } from '../../../types/city';
import { TLocation } from '../../../types/location';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

type MapProps = {
  city: TCity;
  points: TLocation[];
  activeLocation: TLocation | undefined;
  className: string;
};

export default function Map({
  city,
  points,
  activeLocation,
  className,
}: MapProps) {
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

  return <section className={`${className} map`} ref={mapRef}></section>;
}
