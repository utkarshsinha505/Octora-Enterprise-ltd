import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/upe-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 20% 10%, #3b1d7a 0%, #07070c 55%), #07070c",
          color: "#f4f4f8",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            bottom: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "#22d3ee",
            opacity: 0.25,
            filter: "blur(120px)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={660} height={264} alt="" />
        <div style={{ marginTop: 24, fontSize: 40, letterSpacing: 2, display: "flex" }}>
          <span style={{ background: "linear-gradient(90deg,#a78bfa,#67e8f9)", backgroundClip: "text", color: "transparent" }}>
            {site.tagline}
          </span>
        </div>
        <div style={{ marginTop: 18, fontSize: 24, color: "#a3a3b8" }}>
          AI Reels · AI Songs · AI Ad Films · AI Storytelling · Websites
        </div>
      </div>
    ),
    size,
  );
}
