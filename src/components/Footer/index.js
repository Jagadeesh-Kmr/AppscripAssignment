import {
  FooterMainDiv,
  ContactDiv,
  BeTHeFirstP,
  SignUpP,
  MobileText,
  SubscribeDiv,
  EmailInput,
  SubscribeBtn,
  EmailMainDiv,
  ContactUsMainDiv,
  ContactUsH1,
  ContactP,
  Currency,
  MobileContactDiv,
  MobileContactMainP,
  MobileContactP,
  MobileHrLine,
  SocialMediaInput,
  DigitalP,
  CardImg,
  CardContainer,
  CopyRightP,
  DesktopLine,
  MettāMuseP,
  FollowUSImgDiv,
  FollowUsImg,
  CopyRightDesktopP,
} from './styledComponents'

const Footer = () => (
  <>
    <FooterMainDiv>
      <ContactDiv>
        <EmailMainDiv>
          <BeTHeFirstP>Be the first to know</BeTHeFirstP>
          <SignUpP>Sign up for updates from mettā muse.</SignUpP>
          <MobileText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </MobileText>
          <SubscribeDiv>
            <EmailInput type="text" placeholder="Enter your e-mail..." />
            <SubscribeBtn type="button">SUBSCRIBE</SubscribeBtn>
          </SubscribeDiv>
        </EmailMainDiv>

        <ContactUsMainDiv>
          <ContactUsH1>CONTACT US</ContactUsH1>
          <ContactP>+44 221 133 5360</ContactP>
          <ContactP>customercare@mettamuse.com</ContactP>
          <ContactUsH1>Currency</ContactUsH1>
          <Currency>.USD</Currency>
          <ContactP>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </ContactP>
        </ContactUsMainDiv>
      </ContactDiv>

      <DesktopLine />

      <ContactDiv>
        <ContactUsMainDiv>
          <ContactUsH1>mettā muse</ContactUsH1>
          <MettāMuseP>About Us</MettāMuseP>
          <MettāMuseP>Stories</MettāMuseP>
          <MettāMuseP> Artisans</MettāMuseP>
          <MettāMuseP>Boutiques</MettāMuseP>
          <MettāMuseP>Contact Us</MettāMuseP>
          <MettāMuseP>EU Compliances Docs</MettāMuseP>
        </ContactUsMainDiv>

        <ContactUsMainDiv>
          <ContactUsH1>Quick Links</ContactUsH1>
          <MettāMuseP>Orders & Shipping</MettāMuseP>
          <MettāMuseP>Join/Login as a Seller</MettāMuseP>
          <MettāMuseP> Payment & Pricing</MettāMuseP>
          <MettāMuseP>Return & Refunds</MettāMuseP>
          <MettāMuseP>FAQs</MettāMuseP>
          <MettāMuseP>Privacy Policy</MettāMuseP>
          <MettāMuseP>Terms & Conditions</MettāMuseP>
        </ContactUsMainDiv>

        <ContactUsMainDiv>
          <DigitalP>FOLLOW US</DigitalP>
          <FollowUSImgDiv>
            <FollowUsImg
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR0y95_Z9WtpB5K1OhNe_SnWa0oMfMgwVyi0WMn4qaalhT-ylGR"
              alt="instagram"
            />
            <FollowUsImg
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCbwXbTmO_1RblUc24mFoaY5a8_Z9H-N2JkrkfbbnAw&s"
              alt="linkedin"
            />
          </FollowUSImgDiv>
          <DigitalP>mettā muse Accepts</DigitalP>
          <CardContainer>
            <CardImg
              src="https://images.indianexpress.com/2023/11/Google-Pay-1.jpg?w=414"
              alt="card"
            />
            <CardImg
              src="https://logohistory.net/wp-content/uploads/2023/05/Mastercard-Logo.jpg"
              alt="card"
            />

            <CardImg
              src="https://cdn.mentorcruise.com/paypal-1482.jpg"
              alt="card"
            />

            <CardImg
              src="https://i0.wp.com/saztel.com/beta/dev/wp-content/uploads/2020/08/Amex.fw_.png?fit=404%2C264&ssl=1"
              alt="card"
            />

            <CardImg
              src="https://static.india.com/wp-content/uploads/2023/06/India-75.jpg?impolicy=Medium_Widthonly&w=400"
              alt="card"
            />

            <CardImg
              src="https://mir-s3-cdn-cf.behance.net/projects/404/42d18076859679.Y3JvcCwxNjE2LDEyNjQsMCwxMTI.png"
              alt="card"
            />
          </CardContainer>
        </ContactUsMainDiv>
      </ContactDiv>

      <MobileContactDiv>
        <MobileHrLine />
        <MobileContactMainP>CALL US</MobileContactMainP>
        <MobileContactP>
          +44 221 133 5360 . customercare@mettamuse.com
        </MobileContactP>
        <MobileHrLine />
        <MobileContactMainP>CURRENCY</MobileContactMainP>
        <MobileContactP>.USD</MobileContactP>
        <MobileHrLine />
        <SocialMediaInput>
          <option>mettā muse</option>
        </SocialMediaInput>
        <MobileHrLine />
        <SocialMediaInput>
          <option>QUICK LINKS</option>
        </SocialMediaInput>
        <MobileHrLine />
        <SocialMediaInput>
          <option>FOLLOW US</option>
        </SocialMediaInput>
        <MobileHrLine />
        <DigitalP>mettā muse Accepts</DigitalP>

        <CardContainer>
          <CardImg
            src="https://images.indianexpress.com/2023/11/Google-Pay-1.jpg?w=414"
            alt="card"
          />
          <CardImg
            src="https://logohistory.net/wp-content/uploads/2023/05/Mastercard-Logo.jpg"
            alt="card"
          />

          <CardImg
            src="https://cdn.mentorcruise.com/paypal-1482.jpg"
            alt="card"
          />

          <CardImg
            src="https://i0.wp.com/saztel.com/beta/dev/wp-content/uploads/2020/08/Amex.fw_.png?fit=404%2C264&ssl=1"
            alt="card"
          />

          <CardImg
            src="https://static.india.com/wp-content/uploads/2023/06/India-75.jpg?impolicy=Medium_Widthonly&w=400"
            alt="card"
          />

          <CardImg
            src="https://mir-s3-cdn-cf.behance.net/projects/404/42d18076859679.Y3JvcCwxNjE2LDEyNjQsMCwxMTI.png"
            alt="card"
          />
        </CardContainer>
        <CopyRightP>
          Copyright © 2023 mettamuse. All rights reserved.
        </CopyRightP>
      </MobileContactDiv>
      <CopyRightDesktopP>
        Copyright © 2023 mettamuse. All rights reserved.
      </CopyRightDesktopP>
    </FooterMainDiv>
  </>
)

export default Footer
