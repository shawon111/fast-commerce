import Layout from "../components/Global/Layout";
import SectionBanner from "../components/Global/SectionBanner";
import FeaturedProducts from "../components/Pages/Home/FeaturedProducts";
import HomeHeroSection from "../components/Pages/Home/HomeHeroSection";
import JoinNewsLetter from "../components/Pages/Home/JoinNewsLetter";
import LatestProducts from "../components/Pages/Home/LatestProducts";
import PopularProducts from "../components/Pages/Home/PopularProducts";
import ProductBanner from "../components/Pages/Home/ProductBanner";

export default function Home({latestProducts, featuredProducts}) {
  const metaInfo = {title: "FastComerce - best fashion store online", keywords: "fast commerce, ecommerce", metaDesc: "Fast commerce is the best shopping website online"};
  // console.log("latest_101", featuredProducts)

  const sectionBannerOneData = {
    title: "Long sleeve denim shirt",
    price: "35.99",
    discount: "-30",
    link: "/shop",
    bgImage: "/images/bigbanner2.png",
    badgeBgColor: "#FD8D27",
    badgeColor: "#fff",
    buttonColor: "#FD8D27",
    textColor: "#103178",
    priceColor: '#FD8D27',
    overlayColor: '#ffffff8f, #ffffff8f'
  }
  const sectionBannerTwoData = {
    title: "Women's L3X5 Leather Bag",
    price: "119.99",
    discount: "-15",
    link: "/shop",
    bgImage: "/images/bigbanner3.jpg",
    badgeBgColor: "#FFC800",
    badgeColor: "#fff",
    buttonColor: "#FFC800",
    textColor: "#fff",
    priceColor: '#FFC800',
    overlayColor: '#0000004d, #0000004d'
  }
  const sectionBannerThreeData = {
    title: "Digital DSW-5X Smart Watch",
    price: "89.99",
    discount: "-40",
    link: "/shop",
    bgImage: "/images/bigbanner1.jpg",
    badgeBgColor: "#FFC800",
    badgeColor: "#fff",
    buttonColor: "#FFC800",
    textColor: "#fff",
    priceColor: '#FFC800',
    overlayColor: '#0000004d, #0000004d'
  }
  return (
    <>
      <Layout metaInfo={metaInfo}>
          <HomeHeroSection />
          <ProductBanner />
          <LatestProducts products={latestProducts} />
          <SectionBanner data={sectionBannerOneData} />
          <FeaturedProducts products={featuredProducts} />
          <SectionBanner data={sectionBannerTwoData} />
          <PopularProducts products={featuredProducts} />
          <SectionBanner data={sectionBannerThreeData} />
          <JoinNewsLetter />
      </Layout>
    </>
  )
}
export async function getStaticProps(){
  const latestProductsRes = await fetch("https://fast-commerce-backend.onrender.com/products/latest");
  const latestProducts = await latestProductsRes.json();

  const featuredProductsRes = await fetch("https://fast-commerce-backend.onrender.com/products/featured");
  const featuredProducts = await featuredProductsRes.json();

  return {
    props: {
      latestProducts,
      featuredProducts
    }
  }
}