# Nandha's Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features
- **High-Performance**: Built on Vite.
- **Visuals**: Framer Motion animations, Glassmorphism, and responsive design.
- **Analytics**: Integrated with PostHog for session recording and analytics.
- **Authentication**: (None, generic public profile).

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Copy the example environment file and add your PostHog keys:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your actual keys:
   - `VITE_PUBLIC_POSTHOG_KEY`: Your PostHog Project API Key.
   - `VITE_PUBLIC_POSTHOG_HOST`: Your PostHog Host (usually `https://app.posthog.com`).

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure
- `src/components`: UI Components (Hero, About, Skills, etc.)
- `src/data`: Resume and Profile data source.
- `src/main.jsx`: Application entry and PostHog initialization.

## Customization
Update `src/data/profile.js` to modify the content (Resume data).