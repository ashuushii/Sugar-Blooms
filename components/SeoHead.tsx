'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { businessSchema, websiteSchema, breadcrumbSchema } from '@/app/schema';

export function SeoHead() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(path => path);
  
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    ...paths.map((path, index) => ({
      name: path.charAt(0).toUpperCase() + path.slice(1),
      item: `/${paths.slice(0, index + 1).join('/')}`
    }))
  ];

  return (
    <>
      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#FDF2F8" />

      {/* Structured Data */}
      <Script
        id="schema-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(breadcrumbSchema(breadcrumbItems))
        }}
      />
    </>
  );
}
