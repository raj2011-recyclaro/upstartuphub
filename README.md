# UPStartupHub

Production-ready one-page lead capture website for `UPStartupHub.com` with a React + Tailwind frontend and an Express + Nodemailer backend.

## Stack

- Frontend: React (`react-scripts`) + Tailwind CSS
- Backend: Node.js + Express
- Email: Nodemailer with Gmail SMTP App Password

## Local setup

1. Install root tooling:

```bash
npm install
```

2. Install client dependencies:

```bash
cd client
npm install
```

3. Install server dependencies:

```bash
cd ../server
npm install
```

4. Copy `.env.example` values into `server/.env` for backend secrets and `client/.env` if you want a custom API base URL.

Example `server/.env`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
LEAD_RECEIVER_EMAIL=founder@gmail.com
CLIENT_ORIGIN=http://localhost:3000
PORT=5000
```

Example `client/.env`:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

5. Run both apps from the repo root:

```bash
npm run dev
```

## Deployment

- Frontend: Vercel or Netlify
- Backend: Render or Railway
- Set `REACT_APP_API_BASE_URL` on the frontend deployment
- Set `EMAIL_USER`, `EMAIL_PASS`, `LEAD_RECEIVER_EMAIL`, `CLIENT_ORIGIN`, and `PORT` on the backend deployment
