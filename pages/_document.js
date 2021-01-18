import Document, {  Html, Head, NextScript, Main } from 'next/document';
import React from 'react';

export default class extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <body>
                <noscript>
                    <p>You need to enable JavaScript to run this app.</p>
                </noscript>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}