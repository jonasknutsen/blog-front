import React from 'react'

import Header from './Header'
import Footer from './Footer'

import {initGA, logPageView} from '../lib/analytics'

class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <div className='wrapper'>
        <Header />
        <main>
          {this.props.children}
        </main>
        <Footer />
        <style jsx global>{`
          /* normalize.css */
          button,hr,input{overflow:visible}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}
          
          body {
            font-family: 'Ubuntu', sans-serif;
            font-size: 16px;
            height: 100%;
          }
          #__next {
            height: 100%;
          }
          .wrapper {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          main {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            flex: 1;
          }
          h1 {
            font-size: 2rem;
            font-weight: 400;
          }
          h2 {
            font-size: 1.625rem;
          }
          h3 {
            font-size: 1.375rem;
          }
          h4 {
            font-size: 1.125rem;
          }
          a, h2 > a {
            text-decoration: none;
          }
          a:hover, h2 > a:hover {
            text-decoration: underline;
          }
          meta {
            font-size: .8rem;
          }
          pre {
            font-family: "Ubuntu Mono", monospace;
            background-color: #000;
            color: #fff;
            padding: .5rem;
          }
          @media only screen and (min-width: 576px) {
            h1 {
              font-size: 2.5rem;
            }
            h2 {
              font-size: 2rem;
            }
            h3 {
              font-size: 1.5rem;
            }
          }
          @media only screen and (min-width: 768px) {
            h1 {
              font-size: 3rem;
            }
            h2 {
              font-size: 2.25rem;
            }
            h3 {
              font-size: 1.75rem;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Layout
