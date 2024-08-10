import {Helmet} from 'react-helmet'

import Header from '../Header'
import Content from '../Content'
import Products from '../Products'
import Footer from '../Footer'

import './index.css'

const Home = () => (
  <>
    <div className="home-div">
      <Helmet>
        <title>AppScrip</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      <Header />
      <Content />
      <Products />
      <Footer />
    </div>
  </>
)

export default Home
