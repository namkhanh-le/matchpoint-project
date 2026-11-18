
import { notFound } from "next/navigation";
import Link from "next/link";
import { matches } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const match = matches.find((match) => match.id === id);

  return {
    title: match
      ? `${match.homeTeam} vs ${match.awayTeam} | MatchPoint`
      : "Match not found | MatchPoint",
  };
}

export default async function MatchPage({ params }: Props) {
  const { id } = await params;
  const match = matches.find((match) => match.id === id);

  if (!match) notFound();

  return (
    <main>
      <Link href="/">← Back to home</Link>
      <h1>{match.homeTeam} vs {match.awayTeam}</h1>

      <h2>
        {match.status === "Finished"
          ? `${match.homeScore} - ${match.awayScore}`
          : "Upcoming match"}
      </h2>

      <p>Date: {match.date}</p>
      <p>Status: {match.status}</p>
    </main>
  );
}
