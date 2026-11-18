
import Link from "next/link";
import { teams } from "@/lib/data";

export const metadata = {
  title: "Premier League | MatchPoint",
};

export default function LeaguePage() {
  return (
    <main>
      <h1>Premier League</h1>
      <p>League standings and participating teams.</p>

      <h2>Standings</h2>

      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams
            .sort((a, b) => b.points - a.points)
            .map((team) => (
              <tr key={team.id}>
                <td>
                  <Link href={`/teams/${team.slug}`}>{team.name}</Link>
                </td>
                <td>{team.played}</td>
                <td>{team.won}</td>
                <td>{team.drawn}</td>
                <td>{team.lost}</td>
                <td>{team.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
