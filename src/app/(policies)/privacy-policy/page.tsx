import { Header } from "@/components/header";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
  <main className="w-full">
   <Header classNameForBg="bg-transparent"/>
      <div className="w-[95%] lg:w-[70%] mx-auto my-8">
         <h2 className="text-3xl font-medium my-4">Privacy Policy</h2>
         <p className="my-1 font-semibold">Effective Date: 1 August 2024</p>
         <p>Acctovista Consulting LLP &#40; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot; &#41; is committed to safeguarding your personal information and your right to privacy. As an outsourcing company providing services in finance, tax, accounting, auditing, and IT-enabled services &#40; ITES &#41; globally, including clients outside India, we adhere to high standards of data protection and privacy.</p>
        <p>This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website, engage with our services, or interact with us in any way. By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this policy, please do not access our services.</p>
        <h3 className="my-4 text-2xl font-medium">Information We Collect</h3>
        <p>We collect various types of information to provide and enhance our services, including:</p>
        <h4 className="my-2 text-xl font-medium">1. Personal Information</h4>
        <p>When you interact with us, you may provide us with certain personally identifiable information, including:</p>
        <ul className="list-disc ml-5">
          <li>Contact Information: Name, email address, phone number, and physical address.</li>
          <li>Business Information: Company name, job title, industry, and business address.</li>
          <li>Financial Information: Payment card details &#40; processed through a secure third-party payment processor &#41;, billing information, and transaction history.</li>
        </ul>
        <h4 className="my-2 text-xl font-medium">2. Technical Data</h4>
        <p>We automatically collect certain information when you visit our website, including:</p>
        <ul className="list-disc ml-5">
          <li>Usage Data: Information about how you use our website and services, including your IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system, and platform.</li>
          <li>Cookies: We use cookies and similar tracking technologies to enhance user experience. Cookies are small files stored on your device that allow us to recognize your browser and capture certain information. You can manage your cookie preferences through your browser settings.</li>
        </ul>
        <h4 className="my-2 text-xl font-medium">3. Communication Data</h4>
        <p>We collect information about your communication with us, including:</p>
        <ul className="list-disc ml-5">
          <li>Emails, phone calls, and messages exchanged with our staff.</li>
          <li>Feedback, inquiries, or requests for information you submit through our website.</li>
        </ul>
        <h4 className="my-2 text-xl font-medium">4. Sensitive Information</h4>
        <p>We do not intentionally collect sensitive personal information &#40; e.g., data related to race, ethnicity, health, or political beliefs &#41;. If we inadvertently collect such information, we will take steps to delete it.</p>
        <h3 className="my-4 text-2xl font-medium">How We Use Your Information</h3>
        <p>We use the information we collect for various purposes, including:</p>
        <ul className="list-disc ml-5">
          <li>Service Provision: To provide, maintain, and improve our services in finance, tax, accounting, auditing, and ITES.</li>
          <li>Communication: To respond to your inquiries, send service updates, and provide customer support.</li>
          <li>Billing and Payments: To process payments, manage billing, and maintain transaction records.</li>
          <li>Legal Compliance: To comply with applicable laws, regulations, and legal obligations, including tax reporting and audit requirements.</li>
          <li>Marketing: To send you promotional materials and information about our services &#40; with your consent).</li>
          <li>Analytics: To analyze usage trends, improve our website, and enhance our services based on user interactions.</li>
        </ul>
        <h3 className="my-4 text-2xl font-medium">Disclosure of Your Information</h3>
        <p>We do not sell or rent your personal information. We may share your information in the following circumstances:</p>
        <h4 className="my-2 text-xl font-medium">1. Service Providers</h4>
        <p>We may engage third-party service providers to perform functions on our behalf, such as:</p>
        <ul className="list-disc ml-5">
          <li>IT support and maintenance</li>
          <li>Payment processing</li>
          <li>Data analysis</li>
          <li>Email communication</li>
        </ul>
        <p>These service providers may have access to your personal information only to perform specific tasks on our behalf and are required to protect your information.</p>
        <h4 className="my-2 text-xl font-medium">2. Legal Obligations</h4>
        <p>We may disclose your personal information if required to do so by law, in response to valid requests by public authorities, or to protect our rights, privacy, safety, or property, and/or that of our clients or others.</p>
        <h4 className="my-2 text-xl font-medium">3. Business Transfers</h4>
        <p>In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction. We will provide notice before your personal information is transferred and becomes subject to a different privacy policy.</p>
        <h4 className="my-2 text-xl font-medium">4. Consent</h4>
        <p>We may disclose your personal information for any other purpose with your consent.</p>
        <h3 className="my-4 text-2xl font-medium">International Data Transfers</h3>
        <p>Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.</p>
        <p>If you are located outside India and choose to provide information to us, please note that we transfer the data, including personal information, to India and process it there. By providing your information, you consent to the transfer and processing of your information in accordance with this Privacy Policy.</p>
        <h3 className="my-4 text-2xl font-medium">Data Security</h3>
        <p>The security of your personal information is important to us. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, destruction, or alteration. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
        <h4 className="my-2 text-xl font-medium">1. Security Measures</h4>
        <p>We have implemented the following security measures to protect your information:</p>
        <ul className="list-disc ml-5">
          <li>Use of encryption to protect sensitive information.</li>
          <li>Regular security assessments and audits of our systems.</li>
          <li>Restricted access to personal information to authorized personnel only.</li>
        </ul>
        <h3 className="my-4 text-2xl font-medium">Your Rights</h3>
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul className="list-disc ml-5">
          <li>Access: The right to request copies of your personal information.</li>
          <li>Rectification: The right to request correction of inaccurate or incomplete personal information.</li>
          <li>Deletion: The right to request deletion of your personal information, subject to legal obligations.</li>
          <li>Objection: The right to object to the processing of your personal information for specific purposes, such as direct marketing.</li>
          <li>Portability: The right to request the transfer of your personal information to another service provider in a structured, commonly used, and machine-readable format.</li>
        </ul>
        <p>To exercise any of these rights, please contact us using the contact details provided below.</p>
        <h3 className="my-4 text-2xl font-medium">Data Retention</h3>
        <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy or as required by law. When your information is no longer needed, we will securely delete or anonymize it in accordance with applicable laws.</p>
        <h3 className="my-4 text-2xl font-medium">Changes to This Privacy Policy</h3>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.</p>
        <h3 className="my-4 text-2xl font-medium">Contact Us</h3>
        <p>If you have any questions or concerns about this Privacy Policy or our practices regarding your personal information, please contact us:</p>
        <p>Acctovista Consulting LLP</p>
        <br/>
        <p>Email: <Link href="mailto:info@acctovista.com">info@acctovista.com</Link> </p>
        <p>Phone: <Link href="tel:+16466654881"> +1  &#40; 646 &#41; 665-4881</Link> </p>
        <p>Address: 418, Broadway #4160 , Albany, New York-12207.</p>

      </div>
  </main>
);
}
