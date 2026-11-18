
"use client";

export default function MatchError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <h1>Something went wrong</h1>
      <p>We couldnt load this match.</p>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
