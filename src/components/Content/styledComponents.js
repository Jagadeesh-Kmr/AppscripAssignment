import styled from 'styled-components'

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const DiscoverDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  height: 168px;
  top: 292px;
  left: 360px;
  gap: 0px;
  opacity: 1px;
  @media screen and (max-width: 767px) {
    width: 343px;
    height: 127px;
    padding: 0px 0px 16px 0px;
    gap: 0px;
    opacity: 1px;
    margin-top: 10px;
  }
`

export const MobileHomeDiv = styled.div`
  width: Fixed (343px) px;
  height: Hug (46px) px;
  padding: 16px 0px 16px 0px;
  gap: 8px;
  opacity: 1px;
  display: flex;
  text-align: left;
  margin-left: 25px;
  margin-bottom: 0px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const MobileHomeP = styled.p`
  font-family: Simplon Norm;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  text-align: left;
  color: #bfc8cd;
`
export const MobileShopP = styled.p`
  font-family: Simplon Norm;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  text-align: left;
  color: #252020;
  padding-left: 10px;
  border-left: 1px solid #bfc8cd;
`

export const DiscoverH1 = styled.h1`
  width: 666px;
  height: 72px;
  top: 292px;
  left: 388px;
  gap: 0px;
  opacity: 0px;
  margin-left: 15x;
  font-family: Simplon Norm;
  font-size: 40px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: 1px;
  text-align: center;
  color: #252020;
  @media screen and (max-width: 767px) {
    width: 289px;
    height: 29px;
    left: 43px;
    margin-left: 24px;
    gap: 0px;
    opacity: 1px;
    font-family: Simplon Norm;
    font-size: 20px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: center;
  }
`

export const DiscoverP = styled.p`
  width: 721px;
  height: 80px;
  top: 380px;
  left: 360px;
  gap: 0px;
  opacity: 1px;
  font-family: Simplon Norm;
  font-size: 22px;
  font-weight: 400;
  line-height: 40px;
  margin-top: 5px;
  text-align: center;
  color: #252020;
  @media screen and (max-width: 767px) {
    width: 343px;
    height: 66px;
    top: 45px;
    gap: 0px;
    opacity: 1px;
    font-family: Simplon Norm;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
  }
`
