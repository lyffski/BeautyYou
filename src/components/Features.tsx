import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="bg-indigo-600 py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-200">Transform Your Look</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Plastic Surgery in Turkey with All-Inclusive Packages</p>
          <p className="mt-6 text-lg leading-8 text-indigo-200">Experience the best in plastic surgery with our all-inclusive packages that include hotel, flight, and hospital arrangements. Our team of expert surgeons and state-of-the-art facilities ensure the highest level of safety and comfort for our patients. Transform your look and boost your confidence with our plastic surgery services in Turkey.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">All-Inclusive Packages</dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                <p className="flex-auto">Our packages include hotel, flight, and hospital arrangements for a hassle-free experience.</p>
                <p className="mt-6">
                  <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">Expert Surgeons</dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                <p className="flex-auto">Our team of experienced and highly skilled surgeons are dedicated to providing the best results for our patients.</p>
                <p className="mt-6">
                  <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">State-of-the-Art Facilities</dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                <p className="flex-auto">Our hospital is equipped with the latest technology and equipment to ensure the highest level of safety and comfort for our patients.</p>
                <p className="mt-6">
                  <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
