import React, { useState } from 'react';

const AddFilter = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const products = [
    // Array of product data with color, category, price, etc.
  ];

  const filteredProducts = products.filter(product => {
    let passColorFilter = true;
    let passCategoryFilter = true;
    let passPriceRangeFilter = true;

    if (selectedColor && product.color !== selectedColor) {
      passColorFilter = false;
    }

    if (selectedCategory && product.category !== selectedCategory) {
      passCategoryFilter = false;
    }

    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split('-');
      const productPrice = parseFloat(product.price);

      if (productPrice < minPrice || productPrice > maxPrice) {
        passPriceRangeFilter = false;
      }
    }

    return passColorFilter && passCategoryFilter && passPriceRangeFilter;
  });

  return (
    <div>
      {/* Filter Options */}
      <div>
        <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
          <option value="">Select Color</option>
          <option value="blue">Blue</option>
          <option value="blue">Black</option>
          <option value="blue">Green</option>
          <option value="blue">White</option>
          {/* ... more color options */}
        </select>
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="dresses">Dresses</option>
          <option value="dresses">Jackets</option>
          <option value="dresses">Trousers</option>
          <option value="dresses">Travel Bags</option>
          {/* ... more category options */}
        </select>
        <select value={selectedPriceRange} onChange={e => setSelectedPriceRange(e.target.value)}>
          <option value="">Select Price Range</option>
          <option value="0-50">Rs.500 - Rs.1000</option>
          <option value="0-50">Rs.500 - Rs.1000</option>
          <option value="0-50">Rs.1000 - Rs.5000</option>
          <option value="0-50">Rs.5000 - Rs.10000</option>
          {/* ... more price range options */}
        </select>
      </div>

      {/* Display Filtered Products */}
      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>
            {/* Display product information */}
          </div>
        ))}
      </div>
    </div>
  );
};


export default AddFilter;