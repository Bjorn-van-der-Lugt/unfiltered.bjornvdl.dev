  /* eslint-disable @typescript-eslint/no-explicit-any */
  
  import { ReactNode } from 'react';
  import { Montserrat, Roboto } from 'next/font/google';
  import './globals.scss';
  import Header from './components/Header/Header';
  import Footer from './components/Footer/Footer';
  import { headers, cookies } from 'next/headers';


  const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-montserrat',
  });

  const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
  });

  export const metadata = {
    title: 'Unfiltered Perspective | Björn van der Lugt',
    description:
      'Unfiltered Perspective on the Human Condition — A descent into the bedrock of our species, leaving behind moral absolutism and observing through a lens of pragmatism',
    authors: [{ name: 'Björn van der Lugt' }],
    openGraph: {
      title: 'Björn van der Lugt',
      description: 'Unfiltered Perspective on the Human Condition — A descent into the bedrock of our species, leaving behind moral absolutism and observing through a lens of pragmatism',
      url: 'unfiltered.bjornvdl.dev',
      siteName: 'Unfiltered Perspective | Björn van der Lugt',
      type: 'website',
      locale: 'en_EN',
      images: [
        {
          url: '/opengraph.jpg',
          width: 1200,
          height: 884,
          alt: 'Unfiltered Perspective Open Graph image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Unfiltered Perspective | Björn van der Lugt',
      description: 'Unfiltered Perspective on the Human Condition — A descent into the bedrock of our species, leaving behind moral absolutism and observing through a lens of pragmatism',
      images: ['/opengraph.jpg'],
    },
  };

  type Props = {
    children: ReactNode;
  };

  export default async function RootLayout({ children }: Props) {
    const headersList = await headers(); 
    const nonce = headersList.get('x-nonce') || undefined;
    const cookieStore = await cookies();          
    const theme = cookieStore.get('theme')?.value || 'light';

    return (
      <html lang="en" className={theme} data-theme={theme}>
        <head>
          <link
            rel="stylesheet"
            href="/kit-bab82c5629-web/css/all.min.css"
            crossOrigin="anonymous"
          />
        </head>
        <body className={`${roboto.variable} ${montserrat.variable}`}>
          <Header/>
          <main>{children}</main>
          <Footer/>
          <script
            id="next-nonce-script" 
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `window.__NEXT_NONCE__ = '${nonce}';`,
            }}
          />
        </body>
      </html>
    );
  }
