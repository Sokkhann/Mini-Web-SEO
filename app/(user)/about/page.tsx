import React from 'react'
import Image from 'next/image';
import Head from 'next/head';

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>About Us - K.Shopper</title>
        <meta
          name="description"
          content="Learn more about K.Shopper - your trusted online shopping destination. Find out about our mission, values, and commitment to providing quality products and excellent customer service."
        />
        <meta
          name="keywords"
          content="about us, k.shopper, online shopping, e-commerce, mission, values, customer service"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mr-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-600 mb-6">
              At Your Company Name we believe in making a difference through innovation and design. Our journey began
              with a simple idea to create products that enrich people lives. Today we continue to push the
              boundaries of technology while staying true to our core values.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Since our inception we have been committed to sustainability and environmental responsibility. From our
              manufacturing processes to our packaging we strive to minimize our impact on the planet and inspire
              others to do the same.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team is made up of passionate individuals from diverse backgrounds united by a shared vision of
              creating products that empower and inspire. Together we are dedicated to driving positive change and
              shaping the future.
            </p>
          </div>
          <div className="md:w-1/2">
          <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/564x/b8/69/a9/b869a9247c8ce0b0cd4bdf891aa004ba.jpg"
                alt="About Us"
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </main>
  
  </div>
  )
}
