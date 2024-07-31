import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

const ProductSearchAutoComplete = () => {

    const [keyword, setKeyword] = useState("");
    const [products, setProducts] = useState([]);


    const fetchProductsData = useCallback( _.debounce( async () => {
        // Fetch the API reponse here.
        const response = await axios.get('https://fakestoreapi.com/products');
     
        if (response.status === 200) {

                // Response products array
                const products = response.data;

                // Checking if there is anything inside the search keyword
                if (keyword.length === "")  {
                    setProducts(products)
                    return 
                }

                // Fitering on the products
                const filteredProducts = products.filter((product) => product.title.includes(keyword))
                setProducts(filteredProducts)
            }
        
        }, 1000)
    , [])


    useEffect(() => {
        fetchProductsData();
    }, [keyword])


  return (
    <div className='border p-5 rounded-md m-2'>
        <h1 className='mb-4 text-center font-bold text-xl'>Example: Product Search Auto Complete</h1>

        <input 
            className='border p-3 w-full rounded-md mb-4'
            placeholder='Search products...'
            type="text" 
            value={keyword} 
            onChange={(e) => setKeyword(e.target.value)}
        />
        <p className='mb-3 bg-gray-100 p-3'>You are searching for: <strong>{keyword}</strong></p>

        <div className='grid grid-cols-2 gap-4'>

            {/* Product Card */}
            {products && products.map((product) => <div key={`product_${product.id}`} className='shadow-lg p-4 border'>
                <h3 className='font-bold mb-3'>{product.title}</h3>
                <p className='mb-3'>{product.description}</p>
                <div className='text-center'>
                <button className='bg-blue-500 text-white rounded-md py-1 px-3'>Add to Card</button>
                </div>
            </div>)}
            
        </div>
    </div>
  )
}

export default ProductSearchAutoComplete
