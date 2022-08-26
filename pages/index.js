import Layout from "../components/Global/Layout";
import SectionBanner from "../components/Global/SectionBanner";
import HomeHeroSection from "../components/Pages/Home/HomeHeroSection";
import LatestProducts from "../components/Pages/Home/LatestProducts";
import ProductBanner from "../components/Pages/Home/ProductBanner";

export default function Home() {
  const metaInfo = {title: "FastComerce - best fashion store online", keywords: "fast commerce, ecommerce", metaDesc: "Fast commerce is the best shopping website online"};

  const sectionBannerOneData = {
    title: "Long sleeve denim shirt",
    price: "35.99",
    discount: "-30",
    link: "/",
    bgImage: "/images/bigbanner2.png",
    badgeBgColor: "#FD8D27",
    badgeColor: "#fff",
    buttonColor: "#FD8D27",
    textColor: "#103178",
    priceColor: '#FD8D27'
  }
  return (
    <>
      <Layout metaInfo={metaInfo}>
          <HomeHeroSection />
          <ProductBanner />
          <LatestProducts />
          <SectionBanner data={sectionBannerOneData} />
      </Layout>
    </>
  )
}
