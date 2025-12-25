# strava-app

A Next.js application for Strava OAuth authentication.

## Features

- Simple login page with Strava OAuth integration
- Built with Next.js 16, TypeScript, and Tailwind CSS
- Reusable UI components
- Environment-based configuration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Strava API application (create one at [Strava API Settings](https://www.strava.com/settings/api))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marekbenes-dev/strava-app.git
cd strava-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` and add your Strava API credentials:
```
NEXT_PUBLIC_CLIENT_ID=your_strava_client_id
NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/callback
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the login page.

### Build

Build the application for production:

```bash
npm run build
```

### Run Production Build

```bash
npm start
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_CLIENT_ID` | Your Strava API Client ID | `12345` |
| `NEXT_PUBLIC_REDIRECT_URI` | OAuth callback URL | `http://localhost:3000/callback` |

## Project Structure

```
strava-app/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Login page
│   └── globals.css        # Global styles
├── components/
│   └── ui/
│       └── button.tsx     # Button component
├── public/                # Static assets
└── .env.example           # Environment variables template
```

## OAuth Flow

1. User clicks "Sign in with Strava" button
2. Application redirects to Strava authorization page
3. User authorizes the application
4. Strava redirects back to the specified callback URL with an authorization code
5. The authorization code can be exchanged for an access token (implement callback handler)

## Next Steps

To complete the OAuth flow, you'll need to:
1. Create a callback page at `/callback` to handle the OAuth response
2. Exchange the authorization code for an access token
3. Store the access token securely
4. Use the access token to make authenticated requests to Strava API

## License

This project is licensed under the MIT License - see the LICENSE file for details.
