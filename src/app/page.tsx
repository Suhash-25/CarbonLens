'use client';
// Use relative paths to fix resolution errors
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import HowItWorks from '../components/HowItWorks'; // 1. IMPORT THE NEW COMPONENT
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import styles from './page.module.css';
import BackgroundAnimation from '../components/BackgroundAnimation'; // Use relative path

export default function HomePage() {
  return (
    <>
      {/* 3D Animated background element */}
      <BackgroundAnimation />

      {/* Content wrapper to ensure content stays on top */}
      <div className={styles.contentWrapper}>
        <Header />
        <Hero />
        <FeaturesGrid />
        <HowItWorks /> {/* 2. ADD IT HERE */}
        <CTA />
        <Footer />
      </div>
    </>
  );
}