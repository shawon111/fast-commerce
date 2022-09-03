const axios = require('axios');
import React, { useRef, useState } from 'react';
import Layout from '../components/Global/Layout';
import ResponsiveContainer from '../components/Global/ResponsiveContainer';

const InsertData = () => {
    // refs
    const additionalOne = useRef();
    const additionalTwo = useRef();
    const additionalThree = useRef();
    const sizeOne = useRef();
    const sizeTwo = useRef();
    const sizeThree = useRef();
    const featureOne = useRef();
    const featureTwo = useRef();
    const featureThree = useRef();

    // states
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [metaDescription, setMetaDescription] = useState([])
    const [metaTitle, setMetaTitle] = useState([])
    const [sku, setSku] = useState([])
    const [brand, setBrand] = useState("")
    const [stock, setStock] = useState("")
    const [availableStock, setAvailableStock] = useState("")
    const [tags, setTags] = useState("")
    const [featuredImage, setFeaturedImage] = useState({})
    const [galleryImages, setGalleryImages] = useState([])
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("");


    const handleAddProduct = (e) => {
        e.preventDefault();

        const product = new FormData();

        product.append('product_name', name)
        product.append('product_desc', desc)
        product.append('additionalInfo', [
            additionalOne.current.value,
            additionalTwo.current.value,
            additionalThree.current.value,
        ])
        product.append('sizes', [
            sizeOne.current.checked,
            sizeTwo.current.checked,
            sizeThree.current.checked
        ])
        product.append('sku', sku)
        product.append('features', [
            featureOne.current.value,
            featureTwo.current.value,
            featureThree.current.value
        ])
        product.append('brand', brand)
        product.append('stock', stock)
        product.append('availableStock', availableStock)
        product.append('metaTags', tags)
        product.append('metaDescription', metaDescription)
        product.append('metaTitle', metaTitle)
        product.append('category', category)
        product.append('price', price)
        product.append('featuredImage', featuredImage)
        // product.append('gallaryImages', galleryImages)
        for(let i =0; i<=galleryImages.length; i++){
            product.append('gallaryImages', galleryImages[i])
        }

        axios.post("http://localhost:5000/addproduct", product)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data))

    }

    const metaInfo = { title: "FastComerce - best fashion store online", keywords: "fast commerce, ecommerce", metaDesc: "Fast commerce is the best shopping website online" }
    return (
        <div>
            <Layout metaInfo={metaInfo}>
                <ResponsiveContainer>
                    <form encType='multipart/form-data' onSubmit={handleAddProduct}>
                        <h2>product name</h2>
                        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='product name' />
                        <h2>product description</h2>
                        <textarea placeholder='description' onChange={(e) => setDesc(e.target.value)} cols="30" rows="10"></textarea>
                        <h2>additional info: </h2>
                        <input type="text" ref={additionalOne} placeholder='additional info' />
                        <br />
                        <input type="text" ref={additionalTwo} placeholder='additional info' />
                        <br />
                        <input type="text" ref={additionalThree} placeholder='additional info' />
                        <h2>Sizes</h2>
                        <input type="checkbox" ref={sizeOne} id="small" value="small" />
                        <label htmlFor="small"> Small</label>
                        <br />
                        <input type="checkbox" ref={sizeTwo} id="medium" value="medium" />
                        <label htmlFor="medium"> medium</label>
                        <br />
                        <input type="checkbox" ref={sizeThree} id="large" value="large" />
                        <label htmlFor="large"> large</label>

                        <h2>SKU</h2>
                        <input type="text" placeholder='sku number' onChange={(e) => setSku(e.target.value)} />

                        <h2>Features</h2>
                        <input type="text" placeholder='Feature1' ref={featureOne} />
                        <br />
                        <input type="text" placeholder='Feature2' ref={featureTwo} />
                        <br />
                        <input type="text" placeholder='Feature3' ref={featureThree} />

                        <h2>Brand</h2>
                        <input type="text" placeholder='Brand' onChange={(e) => setBrand(e.target.value)} />

                        <h2>stock</h2>
                        <input type="number" placeholder='stock' onChange={(e) => setStock(e.target.value)} />
                        <br />
                        <input type="number" placeholder='Available Stock' onChange={(e) => setAvailableStock(e.target.value)} />

                        <h2>Meta info</h2>
                        <input type="text" placeholder='meta title' onChange={(e)=> setMetaTitle(e.target.value)} />
                        <br/>
                        <textarea type="text" placeholder='meta description' rows="10" cols="50" onChange={(e)=> setMetaDescription(e.target.value)} />
                        <br/>
                        <input type="text" onChange={(e) => setTags(e.target.value)} placeholder='add tags and separate with comma' />

                        <h2>featured Image</h2>
                        <input type="file" name="featuredImage" onChange={(e) => setFeaturedImage(e.target.files[0])} accept="image/*" placeholder='featured image' />

                        <h2>Gallery image</h2>
                        <input type="file" name="galleryImages" onChange={(e) => setGalleryImages(e.target.files)} accept="image/*" placeholder='featured image' multiple />

                        <h2>Category</h2>
                        <input type="text" placeholder='category' onChange={(e) => setCategory(e.target.value)} />
                        <h2>Price</h2>
                        <input type="number" placeholder='price' onChange={(e) => setPrice(e.target.value)} />

                        <h2>Add Product</h2>
                        <button type='submit'>submit</button>
                    </form>
                </ResponsiveContainer>
            </Layout>
        </div>
    );
};

export default InsertData;