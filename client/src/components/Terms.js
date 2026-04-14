import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-8 md:px-16 text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-500 font-medium">Last Updated: April 14, 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 md:px-16 prose prose-slate">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing or using the UPStartupHub website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed">
                The service and its original content, features, and functionality are and will remain the exclusive property of UPStartupHub and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of UPStartupHub.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. User Responsibility</h2>
              <p className="text-slate-600 leading-relaxed">
                When you apply for funding or mentorship through our platform, you agree to provide accurate, current, and complete information. You are solely responsible for the content you submit and the outcomes of your business decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                In no event shall UPStartupHub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Governing Law</h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Changes</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about these Terms, please contact us at: <strong>legal@upstartuphub.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Terms;
