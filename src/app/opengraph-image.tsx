import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070A12",
          color: "#EDEFF7",
          fontFamily: "system-ui, -apple-system, Segoe UI, Inter",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -120,
            background:
              "radial-gradient(700px 360px at 18% 25%, rgba(124,58,237,0.35), transparent 60%), radial-gradient(680px 360px at 85% 18%, rgba(34,211,238,0.28), transparent 60%), radial-gradient(800px 450px at 60% 90%, rgba(96,165,250,0.18), transparent 60%)",
          }}
        />
        <div
          style={{
            width: 1040,
            height: 500,
            borderRadius: 40,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 64,
          }}
        >
          <div style={{ fontSize: 18, opacity: 0.75, letterSpacing: 4 }}>
            PORTFOLIO
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, marginTop: 16 }}>
            Aryan Mathur
          </div>
          <div style={{ fontSize: 28, opacity: 0.82, marginTop: 14 }}>
            Software Engineer + AI Systems Builder
          </div>
          <div style={{ fontSize: 18, opacity: 0.68, marginTop: 20 }}>
            Backend • Distributed Systems • Production Engineering
          </div>
        </div>
      </div>
    ),
    size,
  );
}

