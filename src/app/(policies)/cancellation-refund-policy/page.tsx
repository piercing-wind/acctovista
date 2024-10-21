import { Header } from "@/components/header";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
  <main className="w-full">
   <Header classNameForBg="bg-transparent"/>
      <div className="w-[95%] lg:w-[70%] mx-auto my-8">
         <h2 className="text-3xl font-medium my-4">Cancellation & Refund</h2>
         <p className="my-1 font-semibold">Effective Date: 1 August 2024</p>
         <p>At Acctovista Consulting LLP &#40; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot; &#41;, we strive to provide high-quality outsourcing services in finance, tax, accounting, auditing, and IT-enabled services &#40; ITES &#41;. This Cancellation and Refund Policy outlines the terms and conditions regarding cancellations and refunds related to our services. By engaging with our services, you agree to the terms set forth in this policy.</p>
        <h3 className="my-4 text-2xl font-medium">1. Cancellation Policy</h3>
        <h4 className="my-2 text-xl font-medium">1.1 Cancellation by Clients</h4>
        <p>Clients may request to cancel services within a specified period as outlined below:</p>
        <ul className="list-disc ml-5">
          <li>Before Service Commencement: If you wish to cancel your service request before the services have commenced, you may do so without incurring any cancellation fees.</li>
          <li>After Service Commencement: If you wish to cancel after the services have commenced, you must provide written notice to us at least &#91; +1  &#40; 646 &#41; 665-4881 &#93; days in advance. A cancellation fee of &#91; Insert Percentage or Amount &#93; of the total service fee may apply.</li>
        </ul>
        <h4 className="my-2 text-xl font-medium">1.2 Cancellation by Acctovista Consulting LLP</h4>
        <p>We reserve the right to cancel services for any reason, including but not limited to:</p>
        <ul className="list-disc ml-5">
          <li>Non-payment of fees</li>
          <li>Violation of our Terms and Conditions</li>
          <li>Any other circumstances that prevent us from providing services</li>
        </ul>
        <p>In the event of cancellation by us, you will receive a full refund of any fees paid for services not yet rendered.</p>
        <h3 className="my-4 text-2xl font-medium">2. Refund Policy</h3>
        <h4 className="my-2 text-xl font-medium">2.1 Eligibility for Refunds</h4>
        <p>Refunds may be issued under the following circumstances:</p>
        <ul className="list-disc ml-5">
          <li>Service Not Rendered: If a service has not been provided after payment has been made, you are eligible for a full refund.</li>
          <li>Dissatisfaction with Services: If you are not satisfied with the quality of our services, you may submit a request for a refund within &#91; +1  &#40; 646 &#41; 665-4881 &#93; days of service delivery. Your request must include a detailed explanation of the reasons for your dissatisfaction. We will review your request and determine if a refund is warranted based on our assessment of the situation.</li>
        </ul>
        <h4 className="my-2 text-xl font-medium">2.2 Non-Refundable Fees</h4>
        <p>Certain fees may be non-refundable, including but not limited to:</p>
        <ul className="list-disc ml-5">
          <li>Service fees for completed work</li>
          <li>Fees for services already in progress at the time of cancellation</li>
          <li>Any fees paid for third-party services or materials that cannot be recovered</li>
        </ul>
        <h3 className="my-4 text-2xl font-medium">3. Refund Process</h3>
        <p>To initiate a refund request, please follow these steps:</p>
        <ul className="list-disc ml-5">
          <li>Contact us via email at &#91; info@acctovista.com &#93; or by phone at &#91; +1  &#40; 646 &#41; 665-4881 &#93;.</li>
          <li>Provide your details, including your name, contact information, and the service for which you are requesting a refund.</li>
          <li>Include a description of the reason for the refund request.</li>
        </ul>
        <p>We will process your request within &#91; +1  &#40; 646 &#41; 665-4881 &#93; business days. If your refund request is approved, we will issue the refund to the original payment method used.</p>
        <h3 className="my-4 text-2xl font-medium">4. Changes to this Policy</h3>
        <p>We reserve the right to modify this Cancellation and Refund Policy at any time. We will notify you of any changes by updating the effective date at the top of this policy. Your continued use of our services following any changes constitutes your acceptance of the revised policy.</p>
         <br/>
        <p>If you have any questions or concerns about this policy, please contact us:</p>
        <br/>
        <p>Acctovista Consulting LLP</p>
        <p>Email: <Link href="mailto:info@acctovista.com">info@acctovista.com</Link> </p>
        <p>Phone: <Link href="tel:+16466654881"> +1  &#40; 646 &#41; 665-4881</Link> </p>
        <p>Address: 418, Broadway #4160 , Albany, New York-12207.</p>

      </div>
  </main>
);
}
