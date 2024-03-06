"use client";

import "@arcgis/core/assets/esri/themes/dark/main.css";

import {
  ArcgisAreaMeasurement2d,
  ArcgisExpand,
  ArcgisMap,
  ArcgisSearch,
} from "@arcgis/map-components-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import("@arcgis/map-components/dist/loader").then(
      ({ defineCustomElements }) => {
        defineCustomElements();
      },
    );
  }, []);

  return (
    <main className="flex h-full w-full flex-col items-center justify-between">
      <ArcgisMap
        className="w-screen h-screen"
        itemId="d5dda743788a4b0688fe48f43ae7beb9"
        popup={
          {
            dockEnabled: true,
            dockOptions: {
              position: "bottom-right",
              breakpoint: false,
            },
          } as unknown as __esri.Popup
        }
        theme={
          {
            accentColor: "purple",
            textColor: [125, 255, 13, 0.9],
          } as unknown as __esri.Theme
        }
        onArcgisViewReadyChange={() => {
          console.log("ArcgisViewReady");
        }}
      >
        <ArcgisSearch position="top-right" />
        <ArcgisExpand position="bottom-left">
          <ArcgisAreaMeasurement2d />
        </ArcgisExpand>
      </ArcgisMap>
    </main>
  );
}
