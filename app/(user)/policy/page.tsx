import React from 'react'
import Head from 'next/head';


export default function page() {
  return (
    <div className="container mx-auto py-8 px-8">
      <Head>
        <title>K.Shopper Privacy Policy</title>
        <meta
          name="description"
          content="K.Shopper is committed to protecting the privacy and security of our customers. Learn more about how we collect, use, and protect your personal information in our Privacy Policy."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, personal information, online shopping, e-commerce"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/privacy" />
      </Head>

      <h1 className="text-3xl font-bold mb-4 text-gray-800">Privacy Policy</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">
          Welcome to K.Shopper!
        </p>
        <p className="text-gray-700">
          At K.Shopper, we are committed to protecting the privacy and security of our customers. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to ensure its protection.
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2 text-gray-800">Information We Collect</h2>
        <ul className="list-disc pl-8">
          <li className="text-gray-700">Personal Information: When you visit our website, register an account, place an order, or interact with our services, we may collect personal information such as your name, email address, shipping address, billing address, and payment information.</li>
          <li className="text-gray-700">Usage Information: We may also collect non-personal information about how you interact with our website, including your IP address, browser type, device type, pages visited, and other usage data.</li>
          <li className="text-gray-700">Cookies: We use cookies and similar tracking technologies to enhance your browsing experience and provide personalized content and advertisements. You can manage your cookie preferences through your browser settings.</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-2 text-gray-800">How We Use Your Information</h2>
        <p className="text-gray-700">
          We may use the information we collect for various purposes, including but not limited to:
        </p>
        <ul className="list-disc pl-8">
          <li className="text-gray-700">Processing and fulfilling your orders</li>
          <li className="text-gray-700">Communicating with you about your purchases</li>
          <li className="text-gray-700">Providing customer support and responding to inquiries</li>
          <li className="text-gray-700">Analyzing trends and improving our website</li>
          <li className="text-gray-700">Sending promotional emails and marketing communications (with your consent)</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-2 text-gray-800">Data Security</h2>
        <p className="text-gray-700">
          We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2 text-gray-800">Third-Party Services</h2>
        <p className="text-gray-700">
          We may use third-party services and tools to facilitate our operations and provide a better user experience. These third parties have their own privacy policies governing the use of your information.
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2 text-gray-800">Your Rights</h2>
        <p className="text-gray-700">
          You have the right to access, correct, or delete your personal information. If you have any questions or requests regarding your data, please contact us using the information provided below.
        </p>

        <h2 className="text-xl font-bold mt-4 mb-2 text-gray-800">Changes to This Policy</h2>
        <p className="text-gray-700">
          We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page, and we encourage you to review this Policy periodically.
        </p>
      </div>

      <div className="text-gray-600 mt-4">
        {/* Add your contact information or any other footer content here */}
      </div>
    </div>
  );
}
