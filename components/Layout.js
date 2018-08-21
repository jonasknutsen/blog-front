import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div className='wrapper'>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
