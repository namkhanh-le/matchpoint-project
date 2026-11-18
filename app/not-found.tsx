
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404 - Not Found</h1>
      <p>Sorry, we couldnt find the page or item you requested.</p>
      <Link href="/">Return to MatchPoint</Link>
    </main>
  );
}
