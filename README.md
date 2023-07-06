# Yugioh Drafting Web App

The goal of this app is create a website to easily draft Yugioh cards in an online interface. If you're unfamilar with Yugioh, it's card game such as Magic the Gathering. Drafting is is performed by players selecting from a group of cards to build a custom deck of cards. An explaination can also be found here"

https://boardgamingparent.com/explainer-what-is-a-card-drafting-game/

## What problem does this solve?

There is not a good interface for drafting Yugioh online, and I'd like create it. Yugioh is a hobby I've had off and on for almost 20 years, so this would be primary a passion project of mine.

I realize I did mention two other projects, the e-commerence website and business website for air conditioning, but this is the first project I'd like to complete, as contains the most amount of unfamiliar dependencies, and it captures the most of my motivation. My goal is complete all three, and present them on my website as a project portfolio for Front-End Development recruiters.

## Goals

- Players can create a room at a custom URL to host a game
- Other players, up to 4 total, can be in a room at a time to play
- Accounts can be optionally made to use the website and play
- Game results are stored on a player's account

## Technical breakdown

The tech stack will be Next.js 13, TypeScript, Vanilla CSS, Pusher, MongoDB, and NextAuth. Vercel will be used as the hosting service. I also will be using NameCheap as my domain service.

The current iteration of this project works as a barebones random iterator of images in the public folder. This functionality will be extended with Pusher to create multiplayer behavior with web sockets.
