import React, { useState } from 'react';

const SearchAutoComplete = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState([]);

  const handleSearch = async (e) => {
    const { value } = e.target;
    setKeyword(value);
    if (value.length > 2) {
      const response = await fetch(`https://dummyjson.com/products/search?q=${value}`);
      if (response.status === 200) {
        const data = await response.json();
        setResult(data.products);
      }
    } else {
      setResult([]);
    }
  };

  return (
    <>
      <h1 className="text-2xl bg-blue-500 text-white p-4">Search Auto-Complete</h1>
      <div className="p-4">
        
        <input
          type="text"
          value={keyword}
          onChange={handleSearch}
          className="w-full px-4 py-2 border focus:outline-none"
          placeholder="Search for products..."
        />

        {result.length > 0 && (
          <ul className="mt-5 bg-white border max-h-60 overflow-y-auto">
            {result.map(product => (
              <li key={product.id} className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                {product.title}
              </li>
            ))}
          </ul>
        )}

        {result.length == 0 && keyword.length > 2 &&
          <div className='mt-5 h-60 flex items-center justify-center bg-white border max-h-60 overflow-y-auto'>
            No products found.
          </div>
        }
      </div>
    </>
  );
};

export default SearchAutoComplete;