import './PlaceholderPage.scss';

interface PlaceholderPageProps {
  title: string;
}

function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <main className="placeholder-page">
      <h1>{title}</h1>
      <p>This page is under construction.</p>
    </main>
  );
}

export default PlaceholderPage;
