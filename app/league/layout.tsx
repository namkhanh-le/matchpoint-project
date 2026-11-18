
export default function LeagueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <p>Competition: Premier League</p>
        <hr />
      </header>
      {children}
    </section>
  );
}
