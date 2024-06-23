'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Links to display in the side navigation
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
//  { name: 'Profile', href: '/dashboard/profile', icon: UserGroupIcon },

  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Algorithms', href: '/dashboard/algorithms', icon: UserGroupIcon },
  { name: 'Shifts', href: '/dashboard/shifts', icon: UserGroupIcon }, // Corrected path
  { name: 'Orders', href: '/dashboard/orders', icon: UserGroupIcon }, // Corrected path
  { name: 'Items', href: '/dashboard/items', icon: UserGroupIcon },
  { name: 'Contact Us', href: '/dashboard/contact', icon: UserGroupIcon },

];

export default function NavLinks() {
  const pathname = usePathname(); // Get current pathname

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href, // Apply active class if pathname matches
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
