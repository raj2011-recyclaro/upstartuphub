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

- Frontend: S3 + CloudFront, Vercel, or Netlify
- Backend: AWS Lambda
- Set `REACT_APP_API_BASE_URL` on the frontend deployment
- Set `EMAIL_USER`, `EMAIL_PASS`, `LEAD_RECEIVER_EMAIL`, and `CLIENT_ORIGIN` on the backend deployment

## AWS Lambda deployment

The backend now supports both local Express development and AWS Lambda.

### Backend files

- Local server entry: `server/server.js`
- Lambda handler: `server/lambda.js`

### Deploy steps

1. Install backend dependencies:

```bash
cd server
npm install
```

2. Zip the backend contents from the `server` folder, including `node_modules`.

3. In AWS Lambda:

- Create a new Lambda function using Node.js
- Upload the zipped backend package
- Set the handler to `lambda.handler`
- Configure environment variables:
  - `EMAIL_USER`
  - `EMAIL_PASS`
  - `LEAD_RECEIVER_EMAIL`
  - `CLIENT_ORIGIN`

4. Create a Lambda Function URL and enable `CORS` if you want AWS to manage it at the edge as well.

5. Set your frontend `REACT_APP_API_BASE_URL` to the Function URL.

## GitHub auto-deploy to Lambda

This repo now includes a GitHub Actions workflow at `.github/workflows/deploy-lambda.yml`.

### What it does

- Runs on pushes to `main` when backend files change
- Installs backend dependencies from `server/package-lock.json`
- Creates a deployment zip from `server/`
- Uploads the zip to your AWS Lambda function

### GitHub repository secrets

Add these in `GitHub -> Settings -> Secrets and variables -> Actions`:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_LAMBDA_FUNCTION_NAME`

### IAM permissions

Your AWS IAM user for GitHub Actions should have at least:

- `lambda:UpdateFunctionCode`
- `lambda:GetFunction`

After that, every push to `main` that changes the backend will deploy the latest Lambda code automatically.

### Notes

- `CLIENT_ORIGIN` is now enforced by the backend CORS configuration.
- The current rate limiter is in-memory, so it is best-effort only on Lambda. For stricter abuse protection later, add AWS WAF, API Gateway throttling, or a shared store.
