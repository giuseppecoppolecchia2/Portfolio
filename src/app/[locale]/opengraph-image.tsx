import { ImageResponse } from "next/og";
export const alt = "Giuseppe Coppolecchia — Follow the Why";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b1428", color: "#f0f5ff", padding: 64, width: "100%", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}>
        <span>Giuseppe Coppolecchia</span><span style={{ color: "#69d9f3" }}>g?</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 128, lineHeight: 0.95, letterSpacing: -5 }}>
        <span>Follow</span><span style={{ display: "flex" }}>the why<span style={{ color: "#45f5ac" }}>?</span></span>
      </div>
      <span style={{ fontSize: 24 }}>Junior Frontend / Full-Stack Developer</span>
    </div>, size,
  );
}
