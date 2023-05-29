import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n.js';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    i18n.changeLanguage(router.locale);
  }, [router.locale]);

  const MyComponent = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
  
    const handleClick = (language:any) => {
      setSelectedLanguage(language);
    };
  };



  return (
      <div className="bg-indigo-50">
      <div>
      <ul className="flex justify-between">
      <li>  
        <a onClick={() => handleClick('de')}>de</a>
      </li>
      <li>
        <a onClick={() => handleClick('eng')}>eng</a>
      </li>
    </ul>

      </div>
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps}  />
    </I18nextProvider>
      </div>
  );
}

export default MyApp;