  import { ReactNode } from 'react';
  import { Montserrat, Roboto } from 'next/font/google';
  import './globals.scss';
  import Header from './components/Header/Header';
  import Footer from './components/Footer/Footer';
  import { headers } from 'next/headers';


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
    title: 'Everything UgaBuga',
    description:
      '',
    keywords: [
      '',
      ''
    ],

    authors: [{ name: '' }],
    openGraph: {
      title: '',
      description: '',
      url: '',
      siteName: '',
      type: 'website',
      locale: '',
      images: [
        {
          url: '',
          width: 1200,
          height: 675,
          alt: '',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: '',
      description: '',
      images: [''],
    },
  };

  type Props = {
    children: ReactNode;
  };

  export default async function RootLayout({ children }: Props) {
    const headersList = await headers(); 
    const nonce = headersList.get('x-nonce') || undefined;

    return (
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="/kit-bab82c5629-web/css/all.min.css"
            crossOrigin="anonymous"
          />
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  try {
                    var stored = localStorage.getItem('theme');           // 'light' | 'dark' | null
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    var theme = stored || (prefersDark ? 'dark' : 'light');
                    var root = document.documentElement;
                    root.classList.remove('light','dark');
                    root.classList.add(theme);
                    root.setAttribute('data-theme', theme);
                  } catch (e) {}
                })();
              `,
            }}
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
