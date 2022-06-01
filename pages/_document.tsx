import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name='google-signin-client_id'
            content='7519284269-te4q19eijdqg7npp9ub5v2pj5khi0bm1.apps.googleusercontent.com'
          ></meta>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            src='https://apis.google.com/js/platform.js'
            async
            defer
          ></script>

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <Script
            strategy='beforeInteractive'
            src='https://unpkg.com/typewriter-effect@latest/dist/core.js'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
