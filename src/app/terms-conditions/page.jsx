import React from "react";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions of DevNexus Solutions to understand our service policies, client responsibilities, payments, ownership rights, and legal guidelines.",
  alternates: {
    canonical: "https://devnexussolutions.com/terms-conditions",
  },
};

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800 pt-30">
      <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: 24-09-2025</p>

      <p className="mb-6">
        Welcome to <strong>DevNexus Solutions Private Limited</strong>{" "}
        (“Company,” “we,” “our,” or “us”). These Terms & Conditions (“Terms”)
        govern the use of our website{" "}
        <a
          href="https://devnexussolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://devnexussolutions.com
        </a>{" "}
        (the “Website”) and the professional services we provide, including web
        development, app development, digital marketing, CRM setup, automation,
        and related IT solutions (the “Services”).
      </p>

      <p className="mb-6">
        By accessing our Website or engaging our Services, you (“Client,” “you,”
        or “your”) agree to these Terms. Please read them carefully.
      </p>

      {/* Sections */}
      <div className="space-y-6">
        <Section
          title="1. Our Services"
          content={`We provide IT and digital solutions including (but not limited to):
          • Website & application design and development
          • UI/UX design
          • Digital marketing (SEO, paid media, content, social media)
          • CRM setup & automation
          • AI & blockchain solutions
          • Hosting, maintenance, and technical support

          The scope, deliverables, and timelines for each project will be confirmed in a written Proposal, Quotation, or Service Agreement.`}
        />

        <Section
          title="2. Client Responsibilities"
          content={`To ensure smooth project execution, you agree to:
          • Provide accurate and timely information, approvals, and materials.
          • Confirm that all content you provide is legal and properly licensed.
          • Grant us necessary access to accounts, tools, and platforms.
          • Respond to communications in a reasonable timeframe.`}
        />

        <Section
          title="3. Fees & Payment"
          content={`• Service fees will be shared in writing before starting work.
          • 50% advance is payable before project commencement.
          • Balance is due on delivery or agreed milestones.
          • Invoices must be paid within 7 days of issue.
          • Late payments may result in suspension of Services.
          • Payments once made are non-refundable unless otherwise agreed.`}
        />

        <Section
          title="4. Deliverables & Ownership"
          content={`• Full rights are transferred to you after complete payment.
          • DevNexus retains ownership of pre-existing frameworks or tools.
          • Open-source/third-party software remains under its original license.`}
        />

        <Section
          title="5. Confidentiality"
          content="Both parties agree to protect confidential information and not disclose it without consent."
        />

        <Section
          title="6. Use of Third-Party Services"
          content={`Our services may rely on third-party providers (Google, Meta, CRMs, hosting). 
          • We are not liable for downtime/issues caused by them. 
          • Clients must renew subscriptions unless agreed otherwise.`}
        />

        <Section
          title="7. Warranties & Limitations"
          content={`• We provide services with professional care but do not guarantee business outcomes.
          • Not liable for loss of profits, third-party issues, or delays from incomplete inputs.
          • Liability is limited to the fees paid for the specific Service.`}
        />

        <Section
          title="8. Indemnity"
          content="You agree to indemnify DevNexus Solutions from claims arising from your content, rights violations, or misuse of Services."
        />

        <Section
          title="9. Marketing & Portfolio"
          content="We may showcase completed projects in our portfolio unless you request confidentiality in writing."
        />

        <Section
          title="10. Support, Hosting & Maintenance"
          content="Ongoing support or hosting is only included if agreed in the contract. Extra requests may be billed separately."
        />

        <Section
          title="11. Cancellation & Termination"
          content="We may suspend/terminate services for non-payment, misuse, or violations of these Terms."
        />

        <Section
          title="12. Force Majeure"
          content="We are not responsible for delays beyond our control (natural disasters, outages, strikes, etc.)."
        />

        <Section
          title="13. Data Protection & Privacy"
          content="We comply with India’s DPDP Act 2023 and GDPR where applicable. See our Privacy Policy for details."
        />

        <Section
          title="14. Governing Law & Dispute Resolution"
          content="These Terms are governed by Indian law. Disputes will be handled in Gurugram, Haryana courts after amicable attempts."
        />

        <Section
          title="15. Updates to Terms"
          content="We may update Terms occasionally. Continued use means acceptance of updates."
        />

        <Section
          title="16. Contact Us"
          content={`DevNexus Solutions Private Limited
26 B, Ground Floor, Tower B-2, Spaze I Tech Park, Sector 49, Sohna Road, Gurugram, Haryana, 122018
Email: contactus@devnexus.in | Phone: +91 9211815556`}
        />
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, content }) => (
  <div>
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="whitespace-pre-line leading-relaxed text-gray-700">
      {content}
    </p>
  </div>
);

export default TermsPage;
