import { getTranslations } from 'next-intl/server';

import HomePage from '@/components/HomePage';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'web-dev',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function HomePagePage() {
  return <HomePage />;
}
