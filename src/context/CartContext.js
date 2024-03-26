import React from 'react'

const sampleDataList = [
  {
    title: 'Product 1',
    brand: 'Brand Name',
    id: 1001,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
    price: 760,
    quantity: 5,
  },
  {
    title: 'Product 2',
    brand: 'Brand Name',
    id: 1002,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
    price: 760,
    quantity: 2,
  },
]
const cartContext = React.createContext({
  cartList: sampleDataList,
  addCartItem: () => {},
  deleteCartItem: () => {},
})

export default cartContext
