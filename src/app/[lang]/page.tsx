export default function Page({ params }: { params: { lang: string } }) {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>params.lang = {params.lang}</h1>
      <p>Wenn hier "ru" steht, passt das Routing.</p>
    </div>
  );
}
