import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="relative w-full h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="House"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center px-4 drop-shadow-md">
            Terms & Conditions
          </h1>
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-gray-600 text-center mb-12">
          Last updated: April 2025
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree with any part of the terms, then you may not access the service.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">2. Services Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            BasaFinder offers an online platform that connects landlords and tenants to streamline rental property management, communication, and payment processing.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate and complete.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">4. Account Security</h2>
          <p className="text-gray-700 leading-relaxed">
            You are responsible for safeguarding your password and for any activities or actions under your account. Notify us immediately upon becoming aware of any breach of security or unauthorized use.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We may terminate or suspend access to our Service immediately, without prior notice, for any reason, including a breach of these Terms.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Your continued use of the service after any changes constitutes acceptance of the new terms.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms, please contact us at:
            <a href="mailto:support@basafinder.com" className="text-blue-600 hover:underline ml-1">support@basafinder.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
