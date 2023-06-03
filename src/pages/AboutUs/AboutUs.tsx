import exp from "constants";

const AboutUs = () => {
  return (
    <div>
      <div>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>

          <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                International Plastic Surgery Distributor in Germany
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are a leading distributor of plastic surgery products and
                services in Germany, providing access to top-quality hospitals
                in Turkey.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Learn More
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Contact Us<span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-600 py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-200">
              About Us
            </h2>

            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              International Plastic Surgery Distributor
            </p>

            <p className="mt-6 text-lg leading-8 text-indigo-200">
              Learn more about our company and the services we provide.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  International Distribution
                </dt>

                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                  <p className="flex-auto">
                    We distribute plastic surgery products internationally, with
                    a base in Germany and a hospital in Turkey.
                  </p>

                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  High-Quality Products
                </dt>

                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                  <p className="flex-auto">
                    We provide only the highest quality plastic surgery products
                    to ensure the best results for our clients.
                  </p>

                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  Expertise
                </dt>

                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                  <p className="flex-auto">
                    Our team of experts has years of experience in the plastic
                    surgery industry, ensuring that our clients receive the best
                    possible care.
                  </p>

                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Pricing
            </h2>

            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose the plan that suits you best
            </p>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
            We offer flexible pricing plans to meet your needs and budget.
          </p>

          <div className="mt-20 flow-root">
            <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
              <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Starter Plan
                </h3>

                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $99
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    / month
                  </span>
                </p>

                <a
                  href="#"
                  className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>

                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  Ideal for small clinics and practices
                </p>

                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Access to our product catalog
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    24/7 customer support
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Marketing materials
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Training and onboarding
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Monthly performance reports
                  </li>
                </ul>
              </div>

              <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Professional Plan
                </h3>

                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $199
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    / month
                  </span>
                </p>

                <a
                  href="#"
                  className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>

                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  Perfect for medium-sized clinics and practices
                </p>

                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    All Starter Plan features
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Customized marketing campaigns
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Dedicated account manager
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Advanced analytics and reporting
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Priority support
                  </li>
                </ul>
              </div>

              <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Enterprise Plan
                </h3>

                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $399
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    / month
                  </span>
                </p>

                <a
                  href="#"
                  className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>

                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  Tailored for large clinics and practices
                </p>

                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    All Professional Plan features
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Custom integrations
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    White-labeling options
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    On-site training and support
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Custom pricing and billing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <br />
              Experience the best in international plastic surgery
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Our team of experienced professionals is dedicated to providing
              you with the highest quality care and results. Trust us to help
              you achieve your desired look.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule a consultation
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                View our services
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
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                Frequently asked questions
              </h2>

              <p className="mt-4 text-base leading-7 text-gray-600">
                Can’t find the answer you’re looking for? Reach out to our
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  customer support
                </a>
                team.
              </p>
            </div>

            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    What is international plastic surgery?
                  </dt>

                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    International plastic surgery refers to the practice of
                    traveling to another country to receive plastic surgery.
                    This is often done to save money or to receive a higher
                    quality of care.
                  </dd>
                </div>

                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    Why should I choose a hospital in Turkey for my plastic
                    surgery?
                  </dt>

                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Turkey is known for its high-quality plastic surgery
                    procedures and experienced surgeons. Additionally, the cost
                    of plastic surgery in Turkey is often much lower than in
                    other countries.
                  </dd>
                </div>

                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    What types of plastic surgery procedures are available in
                    Turkey?
                  </dt>

                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Turkey offers a wide range of plastic surgery procedures,
                    including breast augmentation, liposuction, rhinoplasty, and
                    facelifts.
                  </dd>
                </div>

                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    Is it safe to travel to Turkey for plastic surgery?
                  </dt>

                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Yes, it is safe to travel to Turkey for plastic surgery. The
                    hospitals and clinics in Turkey are held to high standards
                    of safety and cleanliness, and the surgeons are highly
                    trained and experienced.
                  </dd>
                </div>

                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    How do I choose the right plastic surgeon in Turkey?
                  </dt>

                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    It is important to do your research and choose a plastic
                    surgeon who is experienced, qualified, and has a good
                    reputation. You can read reviews and ask for recommendations
                    from other patients who have had plastic surgery in Turkey.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
