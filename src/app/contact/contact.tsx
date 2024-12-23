'use client'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>  | { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Submit form data
    const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/contact`,{
      method : "POST",
      headers : {
         'Content-Type' : 'application/json',
         'acctovista' : process.env.NEXT_PUBLIC_ACCTOVISTA_KEY as string
      },
      body : JSON.stringify({
         name : formData.name,
         email : formData.email,
         phone : formData.phone,
         subject : formData.subject,
         query : formData.message
      })
    })
    
    if(res.status === 201) setSubmitted(true);
    else alert("Failed to submit the form. Please try again later.");
  };

  return (
    <div  id="contactform" className="flex justify-center items-center flex-shrink-0 max-w-2xl w-full">
      {submitted ? (
        <div className="text-center text-green-500">
          <p>Thank you for your message!</p>
          <p>We have received your message and will connect with you within 24 hours.</p>
        </div>
      ) : (
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
          <PhoneInput
            country={'us'}
            value={formData.phone}
            onChange={phone => handleChange({ target: { name: 'phone', value: phone } })}
            inputClass={`w-full border rounded-lg focus:outline-none focus:ring-2 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            inputStyle={{ width: '100%', height: 'auto', padding: '0.75rem', paddingLeft: '4rem' }}

     

          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            rows={5}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </form>)}
    </div>
  );
};

export default ContactForm;
