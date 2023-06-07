import client from "../../contentful.js";

//@ts-ignore
import Header from "../components/Header.tsx";
//@ts-ignore
import Hero from "../components/Hero.tsx";
//@ts-ignore
import FeaturesSection from "../components/Features.tsx";
//@ts-ignore
import PricingSection from "../components/Prices.tsx";
//@ts-ignore
import FAQ from "../components/FAQ.tsx";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
//@ts-ignore
import { fetchTranslations } from "../utils/translation.ts";
//@ts-ignore
import { useLanguageStore } from '../hooks/languageStore.ts';
//@ts-ignore
import FormComponent from "../components/FormComponent.tsx";
//@ts-ignore
import DataDisplay from "../components/DataDisplay.tsx";

interface HomePageProps {
  props: any;
}



const HomePage = ({ props }: HomePageProps) => {
  
 
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function initializeTranslations() {
      try {
        const translations = await fetchTranslations(i18n.language);
        i18n.addResourceBundle(i18n.language, "translation", translations);
      } catch (error) {
        console.error("Error initializing translations:", error);
      }
    }

    initializeTranslations();
  }, [i18n.language]);

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };
  console.log("k:", props);
  return (
    <div>
      <Header /> 
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <FAQ />
      <FormComponent />
      <DataDisplay />
    </div>
  );
};

export async function getStaticProps() {
  const response = await client.getEntries({
    content_type: "testTranslate",
  });

  return {
    props: {
      contentful: response,
    },
  };
}

export default HomePage;