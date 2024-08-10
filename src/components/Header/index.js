import {IoIosSearch} from 'react-icons/io'
import {FaRegHeart} from 'react-icons/fa'
import {IoBagHandleOutline} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineMenuUnfold} from 'react-icons/ai'

import {
  NavHeader,
  NavContent,
  NavbarMobileLogoContainer,
  NavbarLargeContainer,
  Logo,
  HeaderIcons,
  LogoContainer,
  HeaderListContainer,
  HeaderList,
} from './styledComponents'

import './index.css'

const headerLogo =
  'https://i.pinimg.com/564x/a4/b0/a9/a4b0a9cf5f50a146b8fa98080ba9f3b9.jpg'

const Header = () => (
  <>
    <NavHeader>
      <NavContent>
        <NavbarMobileLogoContainer>
          <p>
            <AiOutlineMenuUnfold className="website-logo" />
          </p>
          <img
            src={headerLogo}
            alt="dara-celtick-knot"
            className="header-logo"
          />
          <LogoContainer>
            <Logo>LOGO</Logo>
          </LogoContainer>

          <HeaderIcons type="button">
            <IoIosSearch />
          </HeaderIcons>
          <HeaderIcons type="button">
            <FaRegHeart />
          </HeaderIcons>
          <HeaderIcons type="button">
            <IoBagHandleOutline />
          </HeaderIcons>
        </NavbarMobileLogoContainer>

        <NavbarLargeContainer>
          <img
            src={headerLogo}
            alt="dara-celtick-knot"
            className="header-logo"
          />

          <LogoContainer>
            <Logo>LOGO</Logo>
          </LogoContainer>

          <HeaderIcons type="button">
            <IoIosSearch />
          </HeaderIcons>
          <HeaderIcons type="button">
            <FaRegHeart />
          </HeaderIcons>
          <HeaderIcons type="button">
            <IoBagHandleOutline />
          </HeaderIcons>
          <HeaderIcons type="button">
            <CgProfile />
          </HeaderIcons>
        </NavbarLargeContainer>
      </NavContent>
    </NavHeader>

    <HeaderListContainer>
      <HeaderList>SHOP</HeaderList>
      <HeaderList>SKILLS</HeaderList>
      <HeaderList>STORIES</HeaderList>
      <HeaderList>ABOUT</HeaderList>
      <HeaderList>CONTACT US</HeaderList>
    </HeaderListContainer>
  </>
)

export default Header
