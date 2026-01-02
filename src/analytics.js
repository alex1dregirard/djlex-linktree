// src/analytics.js
import ReactGA from "react-ga4";

const TRACKING_ID = import.meta.env.VITE_TRACKING_ID; // Use the Vite environment variable
ReactGA.initialize(TRACKING_ID);
ReactGA.set({ debug: true });

export const trackPageView = (path) => {
  console.log(`Tracking page view: ${path}`);
  ReactGA.send({ hitType: "pageview", page: path });
};
