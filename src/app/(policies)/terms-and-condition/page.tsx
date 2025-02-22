import { Header } from "@/components/header";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
  <main className="w-full">
   <Header classNameForBg="bg-transparent"/>
      <div className="w-[95%] lg:w-[70%] mx-auto my-8">
         <h2 className="text-3xl font-medium my-4">Terms And Conditions</h2>
         <p className="my-1 font-semibold">Effective Date: 1 August 2024</p>
        <p>Welcome to the website of Acctovista Consulting LLP &#40; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot; &#41;. By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions &#40; &quot;Terms&quot; &#41;. If you do not agree with these Terms, please do not use our website or services.</p>
        <h3 className="my-4 text-2xl font-medium">1. Acceptance of Terms</h3>
        <p>By using our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and any additional terms that may apply. We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services following such changes constitutes your acceptance of the new Terms.</p>
        <h3 className="my-4 text-2xl font-medium">2. Services Provided</h3>
        <p>Acctovista Consulting LLP offers outsourcing services in finance, tax, accounting, auditing, and IT-enabled services &#40; ITES &#41;. Our services may include but are not limited to:</p>
        <ul className="list-disc ml-5">
          <li>Financial consulting and advisory</li>
          <li>Tax planning and compliance</li>
          <li>Accounting and bookkeeping</li>
          <li>Audit and assurance services</li>
          <li>IT-enabled services</li>
        </ul>
        <h3 className="my-4 text-2xl font-medium">3. Eligibility</h3>
        <p>You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this eligibility requirement. If you are using our services on behalf of a business or entity, you represent that you have the authority to bind that entity to these Terms.</p>
        <h3 className="my-4 text-2xl font-medium">4. User Obligations</h3>
        <p>By using our services, you agree to:</p>
        <ul className="list-disc ml-5">
          <li>Provide accurate, current, and complete information as required for the provision of our services.</li>
          <li>Maintain and promptly update your information to keep it accurate, current, and complete.</li>
          <li>Use our services only for lawful purposes and in accordance with applicable laws and regulations.</li>
          <li>Not engage in any activity that could harm, disrupt, or interfere with the operation of our services or compromise the security of our systems.</li>
        </ul>
        <h3 className="my-4 text-2xl font-medium">5. Intellectual Property</h3>
        <p>All content, features, and functionality on our website, including but not limited to text, graphics, logos, and software, are the exclusive property of Acctovista Consulting LLP and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our prior written consent.</p>
        <h3 className="my-4 text-2xl font-medium">6. Confidentiality</h3>
        <p>We understand the importance of confidentiality in our business relationships. Any information shared between you and us during the course of our services will be treated as confidential and will not be disclosed to any third parties without your prior consent, except as required by law.</p>
        <h3 className="my-4 text-2xl font-medium">7. Limitation of Liability</h3>
        <p>To the fullest extent permitted by law, Acctovista Consulting LLP shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services, including but not limited to loss of profits, data, or goodwill. Our total liability for any claims arising out of or related to these Terms or our services shall not exceed the amount paid by you for the services in question.</p>
        <h3 className="my-4 text-2xl font-medium">8. Indemnification</h3>
        <p>You agree to indemnify, defend, and hold harmless Acctovista Consulting LLP, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses &#40; including reasonable attorney fees &#41; arising out of or in connection with:</p>
        <ul className="list-disc ml-5">
          <li>Your use of our services.</li>
          <li>Your violation of these Terms.</li>
          <li>Your violation of any rights of another party, including intellectual property rights.</li>
        </ul>
        <h3 className="my-4 text-2xl font-medium">9. Governing Law</h3>
        <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in &#91; Insert City &#93;, India, to resolve any legal matter arising from these Terms or your use of our services.</p>
        <h3 className="my-4 text-2xl font-medium">10. Termination</h3>
        <p>We reserve the right to suspend or terminate your access to our services at our discretion, without prior notice, if we believe you have violated these Terms or engaged in any conduct that we deem harmful or unacceptable.</p>
        <h3 className="my-4 text-2xl font-medium">11. Third-Party Links</h3>
        <p>Our website may contain links to third-party websites that are not owned or controlled by Acctovista Consulting LLP. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and conditions and privacy policies of any third-party sites you visit.</p>
        <h3 className="my-4 text-2xl font-medium">12. Changes to Terms</h3>
        <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website and updating the effective date at the top of this policy. Your continued use of our services after any changes constitutes your acceptance of the revised Terms.</p>
        <br/>
        <p>If you have any questions or concerns about these Terms, please contact us:</p>
        <br/>
        <p>Acctovista Consulting LLP</p>
        <p>Email: <Link href="mailto:info@acctovista.com">info@acctovista.com</Link> </p>
        <p>Phone: <Link href="tel:+16467571155"> +1  &#40; 646 &#41; 757-1155</Link> </p>
        <p>Address: 418, Broadway #4160 , Albany, New York-12207.</p>

      </div>
  </main>
);
}
