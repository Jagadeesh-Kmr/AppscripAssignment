import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  background-color: transparent;
  height: 80px;
  padding-top: 20px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    border-bottom-style: none;
    padding-top: 0px;
    border-bottom: 2px solid #f6f8fc;
  }
`

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1110px;
  padding-top: 25px;
  padding-bottom: 25px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const NavbarMobileLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavbarLargeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1110px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const WebsiteLogo = styled.img`
  width: 110px;
  @media screen and (min-width: 768px) {
    width: 165px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

export const NavMenuMobile = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Logo = styled.p`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  text-decoration: none;
  color: #000000;
  font-size: 30px;
  font-weight: 600;
  margin-left: 90px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: 20px;
  }
`

export const HeaderIcons = styled.button`
  font-size: 24px;
  color: #292d32;
  border: none;
  margin-left: 8px;
  background: transparent;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 767px) {
    font-size: 15px;
    margin: 0px;
  }
`

export const NavBarImg = styled.img`
  width: 24px;
  color: #7e858e;
`
export const HeaderListContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  height: 60px;
  margin-top: 0px;
  border-bottom: 2px solid #f6f8fc;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HeaderList = styled.li`
  list-style-type: none;
  padding: 20px 40px 0px 0px;
  font-size: 18px;
  color: #000000;
  font-weight: 700;
`
