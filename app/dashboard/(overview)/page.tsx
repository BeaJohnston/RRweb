"use client"; // This directive makes the component a Client Component

import { useState } from 'react';
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '../../ui/fonts'; // Adjust according to the file's location
import { Suspense } from 'react';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

export default function Page() {
  // State variables to manage expansion
  const [isFocusAreasExpanded, setIsFocusAreasExpanded] = useState(false);
  const [isClientHelpExpanded, setIsClientHelpExpanded] = useState(false);

  return (
    <main>
      <header className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-bold">Objective, Data-Driven Guidance for Robotic Automation</h1>
          <p className="mt-4 text-gray-300">By providing authentic, first-person research into the technology and providers, we provide objective, data-driven guidance to organizations searching for robotic automation for their warehouse, distribution center, or supply chain operations.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">See How We Help</button>
        </div>
      </header>

      <section className="py-10 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Focus Areas</h2>
            <button
              className="text-sm text-green-400"
              onClick={() => setIsFocusAreasExpanded(!isFocusAreasExpanded)}
            >
              {isFocusAreasExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
          {isFocusAreasExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              {/* Add your focus area components here */}
              <div className="p-4 bg-gray-700 rounded">Focus Area 1</div>
              <div className="p-4 bg-gray-700 rounded">Focus Area 2</div>
              <div className="p-4 bg-gray-700 rounded">Focus Area 3</div>
              <div className="p-4 bg-gray-700 rounded">Focus Area 4</div>
            </div>
          )}
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">How Robot Advisors Helps Its Clients</h2>
            <button
              className="text-sm text-green-400"
              onClick={() => setIsClientHelpExpanded(!isClientHelpExpanded)}
            >
              {isClientHelpExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
          {isClientHelpExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-200 rounded">
                <h3 className="text-lg font-bold">Research & Reports</h3>
                <p>Our methods include doing our own authentic, first-person research into the technology and providers. We create our own proprietary deep technology tools that create robust analysis. We do deep study of client's operations to provide personalized recommendations that fit our client’s business objectives and investment return needs.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded">
                <h3 className="text-lg font-bold">Client Engagements</h3>
                <p>Successful robotic automation projects don&apos;t just need technology; they also need care paid to people, process and integration. Through our holistic approach, RA aims to help companies realize the expected benefits of their robot automation endeavors.</p>
              </div>
              <div className="p-6 bg-gray-200 rounded">
                <h3 className="text-lg font-bold">Practice Principles</h3>
                <p>Robot Advisors aims to leave the world a better place by helping our clients, our suppliers, and ourselves in progressing in our practice principles.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="container mx-auto px-6 py-10">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LatestInvoices />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

