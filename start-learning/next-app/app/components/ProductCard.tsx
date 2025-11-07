import React from 'react'
import AddToCart from './AddToCart';
// import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    // <div className={styles.card}>
    <div className='p-4 border-2 border-gray-300 my-4 bg-sky-400 text-white rounded-lg text-center text-xl hover:bg-sky-600 transition-colors'>
        <AddToCart />
    </div>
  )
}

export default ProductCard