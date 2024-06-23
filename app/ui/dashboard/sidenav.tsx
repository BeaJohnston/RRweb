import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import React from 'react';

const SideNav: React.FC = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-blue-900">
      {/* Changed background color */}
      <Link
        className="mb-2 flex h-40 items-center justify-center rounded-md bg-blue-800 p-4"
        href="/"
      >
        <div className="w-full text-white">
          <AcmeLogo className="w-100 h-70 object-contain" /> {/* Adjusted logo size */}
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {/* Existing navigation links */}
        <NavLinks />

        {/* Placeholder section */}
        <div className="hidden h-auto w-full grow rounded-md bg-blue-800 md:block"></div>
        
        {/* Sign Out button */}
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-blue-800 p-3 text-sm font-medium text-white hover:bg-blue-700 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SideNav;
