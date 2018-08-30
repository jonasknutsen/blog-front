import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <link href='https://fonts.googleapis.com/css?family=Ubuntu+Mono|Ubuntu:300,400,400i,700' rel='stylesheet' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>@jonasknutsen - The blog of Jonas Knutsen</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />
        </body>
      </html>
    )
  }
}
