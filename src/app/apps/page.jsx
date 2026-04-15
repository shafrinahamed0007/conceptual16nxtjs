import TrendingApps from '@/components/homepage/TrendingApps';
import React from 'react';

export const metadata = {
  title: "PH Play Store | APP Page",
  description: "This is an application management website",
};

const page = () => {
  return (
    <div>
      
      <TrendingApps from="apps"/>
    </div>
  );
};

export default page;