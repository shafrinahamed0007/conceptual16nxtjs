import TrendingApps from '@/components/homepage/TrendingApps';
import React from 'react';

export const metadata = {
  title: "PH Play Store | APP Page",
  description: "This is an application management website",
};

const page = () => {
  return (
    <div>
      
      <TrendingApps />
    </div>
  );
};

export default page;