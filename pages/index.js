import Layout from "../components/Global/Layout";

export default function Home() {
  const metaInfo = {title: "FastComerce - best fashion store online", keywords: "fast commerce, ecommerce", metaDesc: "Fast commerce is the best shopping website online"}
  return (
    <>
      <Layout metaInfo={metaInfo}>
        <h1>This is fast commerce home page</h1>
      </Layout>
    </>
  )
}
