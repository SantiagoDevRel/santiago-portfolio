// Countries data — list of activated countries with center coordinates

export interface Country {
  name: string;
  code: string;
  coordinates: { lat: number; lng: number };
}

export const countries: Country[] = [
  { name: "Colombia", code: "CO", coordinates: { lat: 4.5709, lng: -74.2973 } },
  { name: "Turkey", code: "TR", coordinates: { lat: 38.9637, lng: 35.2433 } },
  { name: "Portugal", code: "PT", coordinates: { lat: 39.3999, lng: -8.2245 } },
  { name: "Kenya", code: "KE", coordinates: { lat: -0.0236, lng: 37.9062 } },
  { name: "USA", code: "US", coordinates: { lat: 37.0902, lng: -95.7129 } },
  { name: "Argentina", code: "AR", coordinates: { lat: -38.4161, lng: -63.6167 } },
  { name: "Nigeria", code: "NG", coordinates: { lat: 9.082, lng: 8.6753 } },
  { name: "Spain", code: "ES", coordinates: { lat: 40.4637, lng: -3.7492 } },
];
