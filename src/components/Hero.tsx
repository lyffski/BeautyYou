import React from 'react';
import Header from './Header';

const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="absolute -top-40 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-40" aria-hidden="true"></div>
      <div className="mx-auto max-w-2xl py-10 sm:py-12 lg:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Transform Your Look with Our All-Inclusive Plastic Surgery Packages in Turkey</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Experience the ultimate transformation with our all-inclusive plastic surgery packages in Turkey. From hotel accommodations to flights and hospital stays, we take care of everything so you can focus on your journey to a new you.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book Now</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn More<span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
