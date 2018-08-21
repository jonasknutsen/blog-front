import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div className='wrapper'>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
    <style jsx global>{`
      body {
        font-family: 'Ubuntu', sans-serif
      }
      .wrapper {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      }
    `}</style>
  </div>
)

export default Layout
