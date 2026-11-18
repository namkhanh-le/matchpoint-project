
import { notFound } from "next/navigation";
import Link from "next/link";
import { teams, matches } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const team = teams.find((team) => team.slug === slug);

  return {
    title: team
      ? `${team.name} | MatchPoint`
      : "Team not found | MatchPoint",
  };
}

export default async function TeamPage({ params }: Props) {
  const { slug } = await params;
  const team = teams.find((team) => team.slug === slug);

  if (!team) notFound();

  const teamMatches = matches.filter(
    (match) =>
      match.homeTeam === team.name || match.awayTeam === team.name
  );

  return (
    <main>
      <Link href="/league">← Back to league</Link>
      <h1>{team.name}</h1>
      <p>Premier League team profile</p>

      <h2>Season statistics</h2>
      <p>Played: {team.played}</p>
      <p>Won: {team.won}</p>
      <p>Drawn: {team.drawn}</p>
      <p>Lost: {team.lost}</p>
      <p>Points: {team.points}</p>

      <h2>Matches</h2>
      {teamMatches.map((match) => (
        <p key={match.id}>
          <Link href={`/matches/${match.id}`}>
            {match.homeTeam} vs {match.awayTeam}
          </Link>
        </p>
      ))}
    </main>
  );
}
