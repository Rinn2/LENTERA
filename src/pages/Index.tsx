
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import RegionShowcase from '@/components/RegionShowcase';
import FeaturedCategories from '@/components/FeaturedCategories';
import DigitalLibrary from '@/components/DigitalLibrary';
import FeaturedArtifact from '@/components/FeaturedArtifact';
import CollaborationSection from '@/components/CollaborationSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <RegionShowcase />
        <FeaturedCategories />
        <DigitalLibrary />
        <FeaturedArtifact />
        <CollaborationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
