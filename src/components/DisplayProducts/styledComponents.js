import styled from 'styled-components'

export const DisplayProductsLi = styled.li`
  list-style-type: none;
  width: 242px;
  height: 162px;
  top: 1146px;
  left: 412px;
  gap: 0px;
  opacity: 1px;
  background-color: #ffffff;
  margin: 14px;
  @media screen and (max-width: 768px) {
    width: 168px;
    height: 277px;
    margin: 30px;
    top: 16px;
    gap: 0px;
    opacity: 0px;
  }
`

export const ProductImg = styled.img`
  width: 240px;
  height: 180px;
  top: 1146px;
  left: 412px;
  gap: 0px;
  opacity: 1px;
  @media screen and (max-width: 768px) {
    width: 168px;
    height: 224px;
    top: 16px;
    gap: 0px;
    opacity: 1px;
  }
`
export const ProductName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: left;
  color: #252020;
  @media screen and (max-width: 768px) {
    font-size: 11px;
    font-weight: 700;
    line-height: 16.8px;
    text-align: left;
  }
`

export const SignInDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 17px;
  gap: 0px;
  opacity: 1px;
  @media screen and (max-width: 768px) {
    width: 168px;
    height: Hug (45px) px;
    top: 248px;
    gap: 4px;
    opacity: 0px;
  }
`
export const SignP = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  text-align: left;
  color: #888792;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    text-align: left;
  }
`
export const WishlistBtn = styled.button`
  border: none;
  width: 20px;
  height: 20px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`
