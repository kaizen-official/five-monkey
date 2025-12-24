import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const redaction = localFont({
  src: "../public/Fonts/Redaction_10-Regular.woff2",
  variable: "--font-redaction",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://5monkey.in'),
  title: {
    default: "5Monkey Bistro | Best Italian & European Restaurant in Sonipat | Premium Cafe",
    template: "%s | 5Monkey Bistro Sonipat"
  },
  description: "5Monkey Bistro - Experience authentic Italian & European cuisine in Sonipat, Haryana. Premium coffee, artisan food, cozy ambiance. 50+ dishes including breakfast, pasta, burgers, coffee & desserts. Book a table now! ☎ +91 86838 26807",
  keywords: [
    "5Monkey Bistro",
    "Five Monkey Cafe",
    "restaurant in Sonipat",
    "Italian restaurant Sonipat",
    "European cuisine Sonipat",
    "best cafe Sonipat",
    "premium coffee Sonipat",
    "bistro in Haryana",
    "breakfast restaurant Sonipat",
    "fine dining Sonipat",
    "pasta restaurant Sonipat",
    "burger restaurant Sonipat",
    "coffee shop Sonipat",
    "desserts Sonipat",
    "food delivery Sonipat",
    "table booking Sonipat",
    "Sector 15 Sonipat restaurant",
    "authentic Italian food",
    "European bistro",
    "artisan coffee",
  ],
  authors: [{ name: "5Monkey Bistro" }],
  creator: "5Monkey Bistro",
  publisher: "5Monkey Bistro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://5monkey.in",
    siteName: "5Monkey Bistro",
    title: "5Monkey Bistro | Best Italian & European Restaurant in Sonipat",
    description: "Experience authentic Italian & European cuisine at 5Monkey Bistro in Sonipat. Premium coffee, artisan food, 50+ dishes. Book your table today!",
    images: [
      {
        url: "/svg/Logo.svg",
        width: 1200,
        height: 630,
        alt: "5Monkey Bistro - Italian & European Restaurant in Sonipat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5Monkey Bistro | Best Italian & European Restaurant in Sonipat",
    description: "Experience authentic Italian & European cuisine at 5Monkey Bistro. Premium coffee, artisan food, cozy ambiance in Sonipat.",
    images: ["/svg/Logo.svg"],
    creator: "@5monkeybistro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://5monkey.in",
  },
  category: "Restaurant & Cafe",
  classification: "Business",
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Sonipat",
    "geo.position": "28.9931;77.0151",
    "ICBM": "28.9931, 77.0151",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://5monkey.in/#restaurant",
        name: "5Monkey Bistro",
        alternateName: "Five Monkey Bistro",
        url: "https://5monkey.in",
        logo: "https://5monkey.in/svg/Logo.svg",
        image: [
          "https://5monkey.in/svg/g1.webp",
          "https://5monkey.in/svg/g2.webp",
          "https://5monkey.in/svg/g3.webp",
        ],
        description: "5Monkey Bistro offers authentic Italian and European cuisine with premium coffee in a cozy atmosphere in Sonipat, Haryana.",
        servesCuisine: ["Italian", "European", "Continental", "Cafe"],
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: "SCO-150, Sector-15",
          addressLocality: "Sonipat",
          addressRegion: "Haryana",
          postalCode: "131001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "28.9931",
          longitude: "77.0151",
        },
        telephone: "+918683826807",
        email: "hello@5monkey.in",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "23:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "11:00",
            closes: "23:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          bestRating: "5",
          ratingCount: "150",
        },
        menu: "https://5monkey.in/menu",
        acceptsReservations: "True",
        hasMenu: {
          "@type": "Menu",
          "@id": "https://5monkey.in/menu",
          name: "5Monkey Bistro Menu",
          description: "Full menu featuring Italian and European dishes, coffee, desserts and more",
          hasMenuSection: [
            {
              "@type": "MenuSection",
              name: "All Day Breakfast",
              description: "Healthy and delicious breakfast options available all day",
            },
            {
              "@type": "MenuSection",
              name: "Pasta & Italian",
              description: "Authentic Italian pasta dishes",
            },
            {
              "@type": "MenuSection",
              name: "Burgers",
              description: "Gourmet burgers with premium ingredients",
            },
            {
              "@type": "MenuSection",
              name: "Coffee & Beverages",
              description: "Premium artisan coffee and specialty drinks",
            },
            {
              "@type": "MenuSection",
              name: "Desserts",
              description: "Handcrafted desserts and sweet treats",
            },
          ],
        },
        paymentAccepted: "Cash, Credit Card, Debit Card, UPI",
        currenciesAccepted: "INR",
      },
      {
        "@type": "WebSite",
        "@id": "https://5monkey.in/#website",
        url: "https://5monkey.in",
        name: "5Monkey Bistro",
        description: "Premium Italian & European Restaurant in Sonipat",
        publisher: {
          "@id": "https://5monkey.in/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://5monkey.in/menu?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://5monkey.in/#organization",
        name: "5Monkey Bistro",
        alternateName: "Five Monkey",
        url: "https://5monkey.in",
        logo: {
          "@type": "ImageObject",
          url: "https://5monkey.in/svg/Logo.svg",
          width: 600,
          height: 200,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+918683826807",
          contactType: "customer service",
          email: "hello@5monkey.in",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
          "https://www.instagram.com/5monkeybistro_"
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://5monkey.in" />
        <meta name="theme-color" content="#7E4300" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="5Monkey Bistro" />
        
        {/* Business Information */}
        <meta name="business:contact_data:street_address" content="SCO-150, Sector-15" />
        <meta name="business:contact_data:locality" content="Sonipat" />
        <meta name="business:contact_data:region" content="Haryana" />
        <meta name="business:contact_data:postal_code" content="131001" />
        <meta name="business:contact_data:country_name" content="India" />
        <meta name="business:contact_data:phone_number" content="+918683826807" />
        <meta name="business:contact_data:email" content="hello@5monkey.in" />
        
        {/* Additional SEO */}
        <meta name="rating" content="general" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
      </head>
      <body
        className={`${redaction.variable} antialiased`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
