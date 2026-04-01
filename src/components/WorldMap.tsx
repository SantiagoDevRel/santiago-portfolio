// WorldMap — Mapbox GL dark map with category-colored pins, popups, category filtering, year filtering, and event modal
"use client";

import { useRef, useState, useCallback } from "react";
import MapGL, { Marker, Popup } from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { events, MapEvent, EventCategory } from "@/data/events";
import TimelineSlider from "./TimelineSlider";
import EventModal from "./EventModal";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const categoryColors: Record<EventCategory, string> = {
  Workshop: "#00ff88",
  Conference: "#00aaff",
  Residency: "#ff6600",
  "Field Trip": "#ff00aa",
  Hackathon: "#ffcc00",
};

const allCategories = Object.keys(categoryColors) as EventCategory[];

export default function WorldMap() {
  const mapRef = useRef<MapRef>(null);
  const [selectedEvent, setSelectedEvent] = useState<MapEvent | null>(null);
  const [modalEvent, setModalEvent] = useState<MapEvent | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<EventCategory | null>(null);

  // Filter and offset overlapping pins
  const filteredEvents = (() => {
    const filtered = events.filter((e) => {
      if (selectedYear && e.year !== selectedYear) return false;
      if (activeCategory && e.category !== activeCategory) return false;
      return true;
    });
    const seen = new Map<string, number>();
    return filtered.map((e) => {
      if (!e.coordinates) return e;
      const key = `${e.coordinates.lat.toFixed(2)},${e.coordinates.lng.toFixed(2)}`;
      const count = seen.get(key) ?? 0;
      seen.set(key, count + 1);
      if (count === 0) return e;
      return {
        ...e,
        coordinates: { lat: e.coordinates.lat + count * 0.015, lng: e.coordinates.lng },
      };
    });
  })();

  const handleYearChange = useCallback((year: number | null) => {
    setSelectedYear(year);
    setSelectedEvent(null);
  }, []);

  const openModal = useCallback((event: MapEvent) => {
    setModalEvent(event);
    setSelectedEvent(null);
  }, []);

  if (!MAPBOX_TOKEN) {
    return (
      <section id="map" className="py-20 px-6 text-center">
        <p className="text-foreground/50">
          Set NEXT_PUBLIC_MAPBOX_TOKEN in .env.local to enable the map.
        </p>
      </section>
    );
  }

  return (
    <>
      <section id="map" className="pt-4 pb-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 tracking-tight">
          Where I have been (for work!)
        </h2>

        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden border border-white/10">
          <MapGL
            ref={mapRef}
            initialViewState={{
              longitude: 0,
              latitude: 20,
              zoom: 1.8,
            }}
            style={{ width: "100%", height: 500 }}
            mapStyle="mapbox://styles/mapbox/dark-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            {filteredEvents.filter((e) => e.coordinates !== null).flatMap((event) => {
              const pins = event.tourPins && event.tourPins.length > 0
                ? event.tourPins.map((pin, i) => ({ ...pin, key: `${event.id}-tour-${i}` }))
                : [{ lat: event.coordinates!.lat, lng: event.coordinates!.lng, key: event.id }];
              return pins.map((pin) => (
                <Marker
                  key={pin.key}
                  longitude={pin.lng}
                  latitude={pin.lat}
                  anchor="center"
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setSelectedEvent(event);
                  }}
                >
                  <div
                    className={`rounded-full cursor-pointer border-2 border-background transition-transform duration-200 hover:scale-150 ${event.tourPins ? "w-5 h-5" : "w-4 h-4"}`}
                    style={{ backgroundColor: categoryColors[event.category] }}
                    title={event.title}
                  />
                </Marker>
              ));
            })}

            {selectedEvent && (
              <Popup
                longitude={selectedEvent.coordinates!.lng}
                latitude={selectedEvent.coordinates!.lat}
                anchor="bottom"
                onClose={() => setSelectedEvent(null)}
                closeOnClick={false}
                className="[&_.mapboxgl-popup-content]:bg-background [&_.mapboxgl-popup-content]:text-foreground [&_.mapboxgl-popup-content]:border [&_.mapboxgl-popup-content]:border-white/10 [&_.mapboxgl-popup-content]:rounded-lg [&_.mapboxgl-popup-content]:p-3"
              >
                <div className="w-[200px]">
                  <span
                    className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2"
                    style={{
                      backgroundColor: categoryColors[selectedEvent.category] + "15",
                      color: categoryColors[selectedEvent.category],
                    }}
                  >
                    {selectedEvent.category}
                  </span>

                  <h3 className="font-bold text-sm leading-tight">{selectedEvent.title}</h3>
                  <p className="text-[11px] text-foreground/40 mt-1">
                    {selectedEvent.city}, {selectedEvent.country}
                  </p>

                  {selectedEvent.metrics && selectedEvent.metrics.length > 0 && (
                    <p className="text-[11px] text-foreground/50 mt-2">
                      {selectedEvent.metrics[0].label}:{" "}
                      <span className="text-foreground font-medium">
                        {selectedEvent.metrics[0].value}
                      </span>
                    </p>
                  )}

                  {selectedEvent.mapDescription && (
                    <p className="text-[11px] text-foreground/35 mt-1">
                      {selectedEvent.mapDescription}
                    </p>
                  )}

                  <button
                    onClick={() => openModal(selectedEvent)}
                    className="text-[11px] text-accent/70 hover:text-accent mt-3 transition-colors duration-200"
                  >
                    See more →
                  </button>
                </div>
              </Popup>
            )}
          </MapGL>
        </div>

        <TimelineSlider selectedYear={selectedYear} onYearChange={handleYearChange} />

        {/* Category filter */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          <button
            onClick={() => { setActiveCategory(null); setSelectedEvent(null); }}
            className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
              activeCategory === null
                ? "bg-gradient-to-r from-[#FFD700] via-[#FF6B35] to-[#00C853] text-background border-transparent font-semibold"
                : "border-white/[0.08] text-foreground/40 hover:text-foreground/60 hover:border-white/15"
            }`}
          >
            All
          </button>
          {allCategories.map((category) => {
            const isActive = activeCategory === category;
            const color = categoryColors[category];
            return (
              <button
                key={category}
                onClick={() => { setActiveCategory(isActive ? null : category); setSelectedEvent(null); }}
                className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#FFD700] via-[#FF6B35] to-[#00C853] text-background border-transparent font-semibold"
                    : "border-white/[0.08] text-foreground/40 hover:text-foreground/60 hover:border-white/15"
                }`}
              >
                {color && !isActive && (
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color, opacity: 0.7 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Event detail modal */}
      {modalEvent && (
        <EventModal event={modalEvent} onClose={() => setModalEvent(null)} />
      )}
    </>
  );
}
