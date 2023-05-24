import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="bg-indigo-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <br />
              Get a Complete Plastic Surgery Package in Turkey
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Experience the best of plastic surgery in Turkey with our all-inclusive package that covers your hotel, flight, and hospital expenses. Our team of experienced surgeons will help you achieve the look you desire.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Book Now
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn More
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Can’t find the answer you’re looking for? Reach out to our
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  customer support
                </a>
                team.
              </p>
              <div>
                <img src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2FsbCUyMGNlbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="FAQ" />
              </div>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">What is included in the all-inclusive package?</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">The all-inclusive package includes hotel accommodations, round-trip flights, and the cost of the surgery and hospital stay.</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">What types of plastic surgery are offered in Turkey?</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Turkey offers a wide range of plastic surgery procedures, including breast augmentation, liposuction, rhinoplasty, and facelifts.</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">Is it safe to have plastic surgery in Turkey?</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Yes, Turkey has a reputation for high-quality medical care and experienced plastic surgeons. However, it is important to do your research and choose a reputable clinic or hospital.</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">How long is the recovery period?</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">The recovery period varies depending on the type of surgery, but most patients can return to work and normal activities within 1-2 weeks.</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">What is the cost of plastic surgery in Turkey compared to other countries?</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Plastic surgery in Turkey is generally more affordable than in many other countries, including the United States and Europe.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
