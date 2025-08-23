'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Breadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(path => path);
  
  if (paths.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex px-5 py-3 text-pink-600 text-sm">
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/" className="hover:text-pink-800 transition-colors">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`;
          const isLast = index === paths.length - 1;
          const title = path.charAt(0).toUpperCase() + path.slice(1);
          
          return (
            <li key={path} className="flex items-center">
              <span className="mx-2 text-pink-400">/</span>
              {isLast ? (
                <span className="text-pink-800 font-medium">{title}</span>
              ) : (
                <Link href={href} className="hover:text-pink-800 transition-colors">
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
