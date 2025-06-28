// ✅ GOOD: Simple static import of translations
import en from '../public/locales/en/common.json';

export default function Home() {
  return (
    <main>
      <h1>{en.greeting}</h1>
      <p>{en.welcome}</p>
    </main>
  );
}