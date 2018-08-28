import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
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
        </body>
      </html>
    )
  }
}
