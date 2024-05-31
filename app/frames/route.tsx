/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { appURL } from "../utils";

const frameHandler = frames(async (ctx) => {
  return {
    image: `${appURL()}/landing.gif`,
    buttons: [
      <Button action="link" target="https://devcon.org">
        Website
      </Button>,
      <Button action="link" target="https://devcon.org/en/road-to-devcon/">
        Road to DEVCON
      </Button>,
      <Button
        action="link"
        target="https://esp.ethereum.foundation/devcon-grants"
      >
        Grants
      </Button>,
      <Button
        action="link"
        target={
          "https://www.google.com/calendar/render?action=TEMPLATE&ctz=Asia%2FBangkok&text=Devcon+7&details=Devcon+-+The+Ethereum+Developer+Conference&location=QNSCC+%E2%80%94+Queen+Sirikit+National+Convention+Center&dates=20241112%2F20241116"
        }
      >
        Add to Calendar
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
