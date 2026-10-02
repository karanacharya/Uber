# WES – Ride-Sharing App

A full-stack Uber-like ride-sharing application with separate flows for **users** (riders) and **captains** (drivers). Includes real-time ride tracking, Google Maps integration, and live updates via WebSockets.

---

## Features

- **User (Rider)**
  - Sign up / Login
  - Search pickup and drop locations with suggestions
  - Get fare estimate and book a ride
  - Live tracking while waiting for and during the ride
  - Finish ride flow

- **Captain (Driver)**
  - Sign up / Login
  - View and accept incoming ride requests
  - Start ride and live tracking
  - End ride

- **Tech**
  - Real-time updates with **Socket.IO**
  - **Google Maps** for maps, suggestions, and live tracking
  - **JWT**-based auth with protected routes
  - Responsive UI with **Tailwind CSS** and **GSAP** animations

---

## Tech Stack

| Layer    | Technologies |
| -------- | ------------ |
| Frontend | React 18, Vite, React Router, Tailwind CSS, GSAP, React Google Maps API, Axios, Socket.IO Client |
| Backend  | Node.js, Express, MongoDB (Mongoose), Socket.IO, JWT, bcrypt, CORS, dotenv |

---

## Project Structure

```
wes/
├── frontend/          # React + Vite app
│   ├── src/
│   │   ├── components/   # Reusable UI (maps, ride popups, tracking, etc.)
│   │   ├── context/     # UserContext, CaptainContext, SocketContext
│   │   ├── pages/       # Start, Home, Riding, Captain flows, Auth pages
│   │   └── App.jsx
│   └── package.json
├── Backend/           # Express API + Socket.IO
│   ├── controller/    # user, captain, ride, map
│   ├── routes/        # user, captain, rides, maps
│   ├── services/      # user, captain, ride, maps
│   ├── models/        # user, captain, ride, blacklistToken
│   ├── middlewares/   # auth
│   ├── db/            # MongoDB connection
│   ├── app.js
│   ├── server.js
│   └── socket.js
└── README.md
```

---

## Prerequisites

- **Node.js** (v18+ recommended)
- **MongoDB** (local or Atlas)
- **Google Maps API key** (Maps JavaScript API, Places API, etc., as used in the app)

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

2. **Backend setup**

   ```bash
   cd Backend
   npm install
   ```

   Create a `.env` file in the `Backend` folder:

   ```env
   PORT=3000
   DB_CONNECT=mongodb://localhost:27017/your-db-name
   JWT_SECRET=your-secret-key
   GOOGLE_MAPS_API=your-google-maps-api-key
   ```

3. **Frontend setup**

   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the `frontend` folder (Vite uses `VITE_` prefix):

   ```env
   VITE_BASE_URL=http://localhost:3000
   VITE_API_URL=http://localhost:3000
   VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   ```

   Replace `http://localhost:3000` with your backend URL if different.

---

## Running the App

**Terminal 1 – Backend**

```bash
cd Backend
node server.js
```

Server runs at `http://localhost:3000` (or your `PORT`).

**Terminal 2 – Frontend**

```bash
cd frontend
npm run dev
```

Open the URL shown (e.g. `http://localhost:5173`).

---

## Environment Variables Summary

| Location   | Variable                  | Description                          |
| --------- | ------------------------- | ------------------------------------ |
| Backend   | `PORT`                    | Server port (default 3000)           |
| Backend   | `DB_CONNECT`              | MongoDB connection string            |
| Backend   | `JWT_SECRET`              | Secret for JWT signing               |
| Backend   | `GOOGLE_MAPS_API`         | Google Maps server-side API key      |
| Frontend  | `VITE_BASE_URL`           | Backend base URL for API calls       |
| Frontend  | `VITE_API_URL`            | Backend URL (e.g. for logout)       |
| Frontend  | `VITE_GOOGLE_MAPS_API_KEY`| Google Maps key for browser maps     |

---

## API Overview

- **Users:** `/users` – register, login, profile, logout  
- **Captains:** `/captains` – register, login, profile, logout  
- **Maps:** `/maps` – place suggestions, etc.  
- **Rides:** `/rides` – create, get fare, confirm, start, end ride  

Auth is cookie/JWT-based; protected routes use the auth middleware.

---

## Scripts

**Frontend**

- `npm run dev` – start dev server (Vite)
- `npm run build` – production build
- `npm run preview` – preview production build
- `npm run lint` – run ESLint

**Backend**

- `node server.js` – start the server (or add a `start` script in `package.json`)

---

