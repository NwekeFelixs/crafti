import React from 'react'
import '../src/component/css/style.css';
import Header from './component/fragments/Header'
import HeroSection from './component/fragments/HeroSection'
import AboutSection from './component/fragments/AboutSection'
import CollectionSection from './component/fragments/CollectionSection'
import FeatureSection from './component/fragments/FeatureSection';
import TestimonialsSection from './component/fragments/TestimonialsSection';
import GallerySection from './component/fragments/GallerySection';
import BlogSection from './component/fragments/BlogSection';
import Footer from './component/fragments/Footer';

function Home() {
  return (
    <div>
      <Header/>

      <main> 
        <article>
            <HeroSection/>
            <AboutSection/>
            <CollectionSection/>
            <FeatureSection/>
            <TestimonialsSection/>
            <GallerySection/>
            <BlogSection/>
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default Home