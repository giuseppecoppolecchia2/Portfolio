import { ImageResponse } from "next/og";
export const alt = "Giuseppe Coppolecchia — Follow the Why";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#141618", color: "#f0eee8", padding: 64, width: "100%", height: "100%" }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}><span>Giuseppe Coppolecchia</span><span style={{ color: "#99a6ff" }}>g?</span></div><div style={{ display: "flex", flexDirection: "column", fontSize: 128, lineHeight: 0.95, letterSpacing: -7 }}><span>Follow</span><span>the why?</span></div><span style={{ fontSize: 24 }}>Junior Frontend / Full-Stack Developer</span></div>, size); }
