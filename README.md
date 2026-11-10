# UniLife

UniLife is a campus services directory and review platform for Sri Lankan university students, built with Next.js 16, Firebase Authentication, Cloud Firestore, and Groq. It connects students at NSBM Green University, the University of Colombo, and the University of Sri Jayewardenepura with verified nearby accommodation, dining, pharmacy, retail, and laundry providers.

## Overview

The application serves three roles across dedicated route groups, backed by Firestore collections and a Groq chat endpoint at `POST /api/chat`.

| Route | Purpose |
| --- | --- |
| `/` | Landing page with university selection and featured categories |
| `/browse` | Public directory with search, category, price range, and rating filters |
| `/business/[id]` | Business detail page with photos, hours, contact info, map location, and reviews |
| `/chat` | UniBot campus assistant powered by Groq `llama-3.3-70b-versatile` |
| `/student/dashboard` | Student overview, saved favorites, and submitted reviews |
| `/provider/onboarding` | Three-step onboarding flow for new business owners |
| `/provider/dashboard` | Provider portal for managing business listings and responding to reviews |
| `/admin/dashboard` | Moderation queue for approving listings, managing users, and reviewing reports |

## Features

- **Verified business directory.** Filter off-campus listings by university, service category, price tier, and average star rating.
- **Student favorites and reviews.** Save businesses to a personal favorites list and post star ratings with written feedback.
- **Provider onboarding and portal.** Submit business profiles with photos, operating hours, amenities, pricing, and map coordinates, and track approval status.
- **Admin moderation.** Review pending business submissions, approve or reject listings, and moderate flagged reviews.
- **UniBot chat assistant.** Ask natural-language questions about nearby campus services through `POST /api/chat` and Groq `llama-3.3-70b-versatile`.

## Tech stack

- [Next.js](https://nextjs.org) 16 App Router and [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org) 5
- [Tailwind CSS](https://tailwindcss.com) 4, Radix UI, Lucide icons, Framer Motion, and Recharts
- [Firebase](https://firebase.google.com) Authentication, Cloud Firestore, and Firebase Admin SDK
- [Groq SDK](https://console.groq.com) with `llama-3.3-70b-versatile`
- [Bun](https://bun.sh)

## Getting started

### Prerequisites

- [Bun](https://bun.sh) 1.3 or later
- A [Firebase](https://console.firebase.google.com) project with Authentication and Firestore enabled
- A [Groq](https://console.groq.com) API key
- A Google Maps API key for location and map rendering

### Environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
GROQ_API_KEY=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```

| Variable | Where | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_API_KEY` | Browser | Firebase web API key |
| `NEXT_PUBLIC_AUTH_DOMAIN` | Browser | Firebase Authentication domain |
| `NEXT_PUBLIC_PROJECT_ID` | Browser and server | Firebase and Firestore project identifier |
| `NEXT_PUBLIC_STORAGE_BUCKET` | Browser | Firebase Storage bucket for listing images |
| `NEXT_PUBLIC_MESSAGING_SENDER_ID` | Browser | Firebase Cloud Messaging sender ID |
| `NEXT_PUBLIC_APP_ID` | Browser | Firebase web application ID |
| `GROQ_API_KEY` | Server | Authenticates UniBot requests in `src/app/api/chat/route.ts` |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Browser | Google Maps embeds and geocoding |

### Install and run

```bash
git clone https://github.com/achinisubasinghe/uni-life-reborn.git
cd uni-life-reborn
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Behavior |
| --- | --- |
| `bun run dev` | Start the Next.js development server with Bun |
| `bun run build` | Build the production application |
| `bun run start` | Start the production server |
| `bun run lint` | Run ESLint |

## Project structure

```text
uni-life-reborn/
├── public/
├── scripts/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── businesses/
│   │   │   ├── dashboard/
│   │   │   ├── reviews/
│   │   │   ├── settings/
│   │   │   └── users/
│   │   ├── api/
│   │   │   ├── admin/setup/
│   │   │   └── chat/
│   │   ├── browse/
│   │   ├── business/[id]/
│   │   ├── chat/
│   │   ├── contact/
│   │   ├── provider/
│   │   │   ├── businesses/
│   │   │   ├── dashboard/
│   │   │   ├── onboarding/
│   │   │   ├── reviews/
│   │   │   └── settings/
│   │   ├── student/
│   │   │   ├── browse/
│   │   │   ├── businesses/[id]/
│   │   │   ├── dashboard/
│   │   │   ├── favorites/
│   │   │   ├── reviews/
│   │   │   └── settings/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   └── lib/
├── FIRESTORE_SCHEMA.md
├── firestore.rules
├── next.config.ts
├── package.json
└── tsconfig.json
```
