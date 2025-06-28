import es from '../../public/locales/es/common.json';

export default function Home() {
  return (
    <main>
      <h1>{es.greeting}</h1>
      <p>{es.welcome}</p>
    </main>
  );
}