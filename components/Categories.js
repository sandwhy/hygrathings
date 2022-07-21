import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category) => (
        <Link key={category.name} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block  pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

// ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'}
export default Categories