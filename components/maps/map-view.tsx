"use client";

import * as React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import type { MapPoint } from "@/lib/dummy-data";

const POINT_COLOR: Record<MapPoint["type"], string> = {
  pohon: "#5e6655",
  watershed: "#3f4244",
  "carbon-plot": "#b8af9f",
};

export function MapView({
  points,
  center = [-7.8291, 110.3735],
  zoom = 15,
  interactive = true,
  height = "480px",
}: {
  points: MapPoint[];
  center?: [number, number];
  zoom?: number;
  interactive?: boolean;
  height?: string;
}) {
  return (
    <div style={{ height }} className="overflow-hidden rounded-2xl border border-border">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={interactive}
        dragging={interactive}
        zoomControl={interactive}
        doubleClickZoom={interactive}
        touchZoom={interactive}
        attributionControl={interactive}
        className="size-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((point) => (
          <CircleMarker
            key={point.id}
            center={[point.lat, point.lng]}
            radius={8}
            pathOptions={{
              color: POINT_COLOR[point.type],
              fillColor: POINT_COLOR[point.type],
              fillOpacity: 0.85,
              weight: 2,
            }}
          >
            <Popup>
              <span className="text-sm font-medium">{point.title}</span>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
