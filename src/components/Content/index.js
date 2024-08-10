import {
  DiscoverDiv,
  DiscoverH1,
  DiscoverP,
  ContentDiv,
  MobileHomeDiv,
  MobileHomeP,
  MobileShopP,
} from './styledComponents'

const Content = () => (
  <>
    <ContentDiv>
      <MobileHomeDiv>
        <MobileHomeP>Home</MobileHomeP>
        <MobileShopP>SHOP</MobileShopP>
      </MobileHomeDiv>
      <DiscoverDiv>
        <DiscoverH1>DISCOVER OUR PRODUCTS</DiscoverH1>
        <DiscoverP>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </DiscoverP>
      </DiscoverDiv>
    </ContentDiv>
  </>
)

export default Content
