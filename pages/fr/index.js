import fr from '../../public/locales/fr/common.json';

export default function Home() {
  return (
    <main>
      <h1>{fr.greeting}</h1>
      <p>{fr.welcome}</p>
    </main>
  );
}