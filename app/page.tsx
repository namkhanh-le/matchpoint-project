
import Link from "next/link";
import { matches } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <h1>MatchPoint</h1>
      <p>Your home for league results, teams and fixtures.</p>

      <h2>Recent and upcoming matches</h2>

      <div>
        {matches.map((match) => (
          <article key={match.id}>
            <h3>
              {match.homeTeam} vs {match.awayTeam}
            </h3>
            <p>
              {match.status === "Finished"
                ? `${match.homeScore} - ${match.awayScore}`
                : match.date}
            </p>
            <Link href={`/matches/${match.id}`}>View match</Link>
          </article>
        ))}
      </div>

      <Link href="/league">Explore the league</Link>
    </main>
  );
}
