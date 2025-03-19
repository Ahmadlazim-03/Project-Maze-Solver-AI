import type { Metadata } from 'next';
import { Inter, Roboto, Poppins, Raleway } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Script from 'next/script';
import "./assets/img/favicon.png";
import "./assets/img/apple-touch-icon.png";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/aos/aos.css"
import "./assets/vendor/glightbox/css/glightbox.min.css"
import "./assets/vendor/swiper/swiper-bundle.min.css"
import "./assets/css/main.css"

// Konfigurasi font
const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Maze Solver Kelompok 1',
  description: 'Project AI by Kelompok 1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Hapus link Google Fonts karena kita pakai @next/font */}
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/assets/css/main.css" rel="stylesheet" />
      </Head>
      <body className={`${inter.className} ${roboto.className} ${poppins.className} ${raleway.className} index-page`}>
        {children}
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="/assets/vendor/php-email-form/validate.js" />
        <Script src="/assets/vendor/aos/aos.js" />
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" />
        <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" />
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" />
        <Script src="/assets/js/main.js" />
      </body>
    </html>
  );
}