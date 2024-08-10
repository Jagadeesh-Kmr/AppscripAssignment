import {useState} from 'react'

import {
  DisplayProductsLi,
  ProductImg,
  ProductName,
  SignInDiv,
  SignP,
  WishlistBtn,
} from './styledComponents'

import './index.css'

const DisplayProducts = props => {
  const [toggle, setToggle] = useState(false)
  const {productsData} = props
  const {title, image} = productsData
  const wishListImage = toggle
    ? 'https://cdn-icons-png.freepik.com/512/8830/8830807.png'
    : 'https://static-00.iconduck.com/assets.00/wishlist-icon-256x245-n7p27gzm.png'
  return (
    <>
      <DisplayProductsLi>
        <ProductImg src={image} alt={title} />
        <ProductName>{title}</ProductName>
        <SignInDiv>
          <SignP>Sign in or Create an account to see pricing</SignP>
          <WishlistBtn type="button" onClick={() => setToggle(!toggle)}>
            <img src={wishListImage} alt="wishList" className="wishlist-img" />
          </WishlistBtn>
        </SignInDiv>
      </DisplayProductsLi>
    </>
  )
}

export default DisplayProducts
