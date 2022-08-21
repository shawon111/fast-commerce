import Layout from "../components/Global/Layout";
import HomeHeroSection from "../components/Pages/Home/HomeHeroSection";

export default function Home() {
  const metaInfo = {title: "FastComerce - best fashion store online", keywords: "fast commerce, ecommerce", metaDesc: "Fast commerce is the best shopping website online"}
  return (
    <>
      <Layout metaInfo={metaInfo}>
          <HomeHeroSection />
      </Layout>
    </>
  )
}
