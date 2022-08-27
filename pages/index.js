import Layout from "../components/Global/Layout";
import SectionBanner from "../components/Global/SectionBanner";
import FeaturedProducts from "../components/Pages/Home/FeaturedProducts";
import HomeHeroSection from "../components/Pages/Home/HomeHeroSection";
import LatestProducts from "../components/Pages/Home/LatestProducts";
import PopularProducts from "../components/Pages/Home/PopularProducts";
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
  const sectionBannerTwoData = {
    title: "Women's L3X5 Leather Bag",
    price: "119.99",
    discount: "-15",
    link: "/",
    bgImage: "/images/bigbanner3.jpg",
    badgeBgColor: "#FFC800",
    badgeColor: "#fff",
    buttonColor: "#FFC800",
    textColor: "#fff",
    priceColor: '#FFC800'
  }
  const sectionBannerThreeData = {
    title: "Digital DSW-5X Smart Watch",
    price: "89.99",
    discount: "-40",
    link: "/",
    bgImage: "/images/bigbanner-4.jpg",
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
          <FeaturedProducts />
          <SectionBanner data={sectionBannerTwoData} />
          <PopularProducts />
          <SectionBanner data={sectionBannerThreeData} />
      </Layout>
    </>
  )
}
