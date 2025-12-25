import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <p className="text-red-600">
          Missing required environment variables. Please set NEXT_PUBLIC_CLIENT_ID and NEXT_PUBLIC_REDIRECT_URI.
        </p>
      </div>
    );
  }

  const stravaAuthUrl =
    `https://www.strava.com/oauth/authorize` +
    `?client_id=${clientId}` +
    `&redirect_uri=${redirectUri}` +
    `&response_type=code` +
    `&scope=activity:read,activity:write`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Link href={stravaAuthUrl}>
        <Button size="lg">Sign in with Strava</Button>
      </Link>
    </div>
  );
}
