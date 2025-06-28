import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <h1>{t('greeting')}</h1>
      <p>{t('welcome')}</p>
    </>
  );
}

// THIS FUNCTION IS REQUIRED!
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}