import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-8 md:px-16 text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-medium">Last Updated: April 14, 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 md:px-16 prose prose-slate">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                Welcome to UPStartupHub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. The Data We Collect</h2>
              <p className="text-slate-600 leading-relaxed">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Data</h2>
              <p className="text-slate-600 leading-relaxed">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
                <li>To register you as a new startup or mentor.</li>
                <li>To process and deliver your application.</li>
                <li>To manage our relationship with you.</li>
                <li>To improve our website, services, marketing and customer relationships.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <strong>privacy@upstartuphub.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Privacy;
