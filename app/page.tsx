import { fetchMetadata } from "frames.js/next";
import type { Metadata } from "next";
import Link from "next/link";
import { appURL } from "./utils";
import { DebugLink } from "./components/DebugLink";
import { RedirectToHome } from "./components/Redirect";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Devcon Frame",
    description: "Devcon Frame by limone.eth",
    other: {
      ...(await fetchMetadata(new URL("/frames", appURL()))),
    },
  };
}

// This is a react server component only
export default async function Home() {
  // then, when done, return next frame
  return <RedirectToHome />;
}
