# Finsadal Media - Portfolio Website

A modern, professional portfolio website built with React and Node.js.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Styling**: CSS3 with modern features

## Getting Started

### Installation

1. Install backend dependencies:
```bash
npm install
```

2. Install frontend dependencies:
```bash
cd client
npm install
cd ..
```

3. Create environment file:
```bash
cp .env.example .env
```
Edit `.env` with your configuration.

### Development

Run both frontend and backend:
```bash
npm run dev:all
```

Or run separately:
- Backend: `npm run dev` (runs on port 3001)
- Frontend: `npm run dev:client` (runs on port 5173)

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
FM_Portfolio/
├── client/          # React frontend
├── server/          # Node.js backend
├── .env            # Environment variables
└── package.json    # Root package.json
```

## Features

- Responsive design
- Modern UI/UX
- Contact form with email notifications
- Project showcase
- About section
- Smooth animations

---

Built with ❤️ by Finsadal Media
