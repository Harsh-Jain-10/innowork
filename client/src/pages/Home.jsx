import React from 'react';
import HomeHeroSection from '../components/HomeHeroSection';
import HomeLogoStrip from '../components/HomeLogoStrip';
import HomeWhyInnoworq from '../components/HomeWhyInnoworq';
import HomeStatsBar from '../components/HomeStatsBar';
import HomeServicesSection from '../components/HomeServicesSection';
import HomeSolutionsSection from '../components/HomeSolutionsSection';
import GlobalPresence from '../components/GlobalPresence';
import HomeFaqSection from '../components/HomeFaqSection';

export default function Home() {
  return (
    <div 
      style={{ 
        backgroundColor: 'var(--bg-primary)', 
        color: 'var(--text-primary)', 
        overflow: 'hidden' 
      }} 
      id="home-page-view"
    >
      {/* 1. Modern Enterprise Hero Section */}
      <HomeHeroSection />

      {/* 2. OEM Logo Strip (Equalized OEM Partner Alliances) */}
      <HomeLogoStrip />

      {/* 3. Why Innoworq Section (With Proof Cards) */}
      <HomeWhyInnoworq />

      {/* 4. Stats Bar (Enterprise Metrics) */}
      <HomeStatsBar />

      {/* 5. Core Services Showcase */}
      <HomeServicesSection />

      {/* 6. Enterprise Solutions Showcase */}
      <HomeSolutionsSection />

      {/* 7. Global Presence & Regional Hubs */}
      <GlobalPresence />

      {/* 8. Frequently Asked Questions */}
      <HomeFaqSection />
    </div>
  );
}
