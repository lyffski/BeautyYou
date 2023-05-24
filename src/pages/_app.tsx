import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n.js';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Set up language translation based on router locale
  useEffect(() => {
    const { locale } = router;
    if (locale) {
      i18n.changeLanguage(locale);
    }
  }, [router.locale]);

  return (
      <div className="bg-indigo-50">
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />

    </I18nextProvider>
      </div>
  );
}

export default MyApp;