/** @jsxImportSource frog/jsx */

import { Frog } from 'frog'
import { devtools } from 'frog/dev'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'
import { neynar as nnHub } from "frog/hubs";
import { neynar as nnMiddleware } from "frog/middlewares";

import { HomeFrameHandler } from "@/frames/HomeFrameHandler";
import { LeaderboardFrameHandler } from "@/frames/LeaderboardFrameHandler";
import { ErrorFrameHandler } from "@/frames/ErrorFrameHandler";

const app = new Frog({
  hub: nnHub({apiKey: process.env.NEYNAR_API_KEY!}),
  assetsPath: '/',
  basePath: '/api',
  imageOptions: {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Radio Canada',
        weight: 400,
        source: 'google',
      },
      {
        name: 'Radio Canada',
        weight: 600,
        source: 'google',
      },
    ],
  },
})

const neynarMiddleware = nnMiddleware({
  apiKey: process.env.NEYNAR_API_KEY!,
  features: ['interactor'],
})

const verified = (c: any, fn: any) => {
  if (process.env.ENV === "development" || c.verified) {
    return fn(c);
  }
  return ErrorFrameHandler(c);
}

app.frame('/', HomeFrameHandler)
app.frame('/leaderboard', neynarMiddleware, (c) => verified(c, LeaderboardFrameHandler));

devtools(app, {serveStatic})

export const GET = handle(app)
export const POST = handle(app)
