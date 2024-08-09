'use client';
import { uploadToS3 } from '@/lib/aws';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import AWS from 'aws-sdk';


interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  jobProfile: string;
  customPosition: string;
  position: string;
  resume: File | null;
  coverLetter: string;
}

interface FormErrors {
  [key: string]: string;
}

AWS.config.update({
   region: 'ap-south-1', // Your region
   accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
   secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
 });

const CareerForm: React.FC = () => {

   const s3 = new AWS.S3();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    countryCode : '+91',
    phone: '',
    jobProfile: '',
    customPosition: '',
    position: '',
    resume: null,
    coverLetter: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = (): FormErrors => {
    let tempErrors: FormErrors = {};
    if (!formData.name) tempErrors.name = 'Full Name is required.';
    if (!formData.email) tempErrors.email = 'Email is required.';
    if (!formData.phone) tempErrors.phone = 'Phone Number is required.';
    if (!formData.position) tempErrors.position = 'Position is required.';
    if (!formData.resume) tempErrors.resume = 'Resume is required.';
    return tempErrors;
  };

  const handleSubmit =async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if(formData.resume){
         try{
            const file = formData.resume;
            const uploadFile =async (file : any) => {
                 const params = {
                   Bucket: 'acctovista',
                   Key: `uploads/${file.name}`,
                   Body: file,
                   ContentType: file.type,
                 };

                 s3.upload(params, (err : any, data : any ) => {
                   if (err) {
                     console.error('Error uploading file:', err);
                   } else {
                     console.log('File uploaded successfully:', data);
                   }
                 });
               };

            uploadFile(file)

            const response = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL as string}/api/careers`,{
               method : 'POST',
               headers : {
                  'Content-Type' : 'application/json',
                  'acctovista' : process.env.NEXT_PUBLIC_ACCTOVISTA_KEY as string
               },
               body : JSON.stringify({
                  ...formData,
                  resume : `https://d11wbp5a59q34o.cloudfront.net/" + ${"uploadData.fileKey"}`,
                  fileKey : "uploadData.fileKey"
               })
            })
            if(response.status === 201){
               alert('We have received your application. We will get back to you soon. Thank you!');
            }

         }catch(e){
            console.log(e);   
         }
      }


      // Handle form submission logic here
      console.log(formData);
    }
  };

  return (
    <div className="w-[95%] lg:w-[70%] mx-auto my-20 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Join Us at AcctoVista</h2>
      <p className="text-lg mb-8 text-center">Shape Your Future with Us, Create Opportunities and Your Favored Work Culture</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-2 p-2 border rounded-lg ${errors.name ? 'border-red-500' : ''}`}
            required
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-2 p-2 border rounded-lg ${errors.email ? 'border-red-500' : ''}`}
            required
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="flex flex-col">
           <label htmlFor="phone" className="text-lg font-medium">Phone Number</label>
           <div className="flex mt-2">
             <select
               id="countryCode"
               name="countryCode"
               value={formData.countryCode}
               onChange={handleChange}
               className="p-2 border rounded-l-lg"
               required
             >
               <option value="+1">+1 (US)</option>
               <option value="+44">+44 (UK)</option>
               <option value="+91">+91 (IN)</option>
               <option value="+61">+61 (AU)</option>
               <option value="+81">+81 (JP)</option>
               <option value="+49">+49 (DE)</option>
               <option value="+33">+33 (FR)</option>
               <option value="+39">+39 (IT)</option>
               <option value="+86">+86 (CN)</option>
               <option value="+7">+7 (RU)</option>
               <option value="+55">+55 (BR)</option>
               <option value="+27">+27 (ZA)</option>
               <option value="+34">+34 (ES)</option>
               <option value="+82">+82 (KR)</option>
               <option value="+31">+31 (NL)</option>
               <option value="+46">+46 (SE)</option>
               <option value="+41">+41 (CH)</option>
               <option value="+52">+52 (MX)</option>
               <option value="+64">+64 (NZ)</option>
               <option value="+65">+65 (SG)</option>
             </select>
             <input
               type="tel"
               id="phone"
               name="phone"
               value={formData.phone}
               onChange={handleChange}
               className={`p-2 border rounded-r-lg flex-grow ${errors.phone ? 'border-red-500' : ''}`}
               required
             />
           </div>
           {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
         </div>
        <div className="flex flex-col">
          <label htmlFor="jobProfile" className="text-lg font-medium">Job Profile</label>
          <select
            id="jobProfile"
            name="jobProfile"
            value={formData.jobProfile}
            onChange={handleChange}
            className={`mt-2 p-2 border rounded-lg ${errors.jobProfile ? 'border-red-500' : ''}`}
            required
          >
            <option value="">Select a Job Profile</option>
            <option value="Audit">Audit</option>
            <option value="Accounting">Accounting</option>
            <option value="Taxation">Taxation</option>
            <option value="ITES">ITES</option>
            <option value="Finance">Finance</option>
            <option value="Others">Others</option>
          </select>
          {formData.jobProfile === 'Others' && (
            <input
              type="text"
              name="customPosition"
              value={formData.customPosition}
              onChange={handleChange}
              placeholder="Please specify"
              className="mt-2 p-2 border rounded-lg"
              required
            />
          )}
          {errors.position && <span className="text-red-500 text-sm">{errors.position}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="position" className="text-lg font-medium">Position Applied For</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className={`mt-2 p-2 border rounded-lg ${errors.position ? 'border-red-500' : ''}`}
            required
          >
            <option value="">Select a position</option>
            <option value="Manager">Manager</option>
            <option value="Senior Manager">Senior Manager</option>
            <option value="Assistant Manager">Assistant Manager</option>
            <option value="Associtate">Associtate</option>
          </select>
          {errors.position && <span className="text-red-500 text-sm">{errors.position}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="resume" className="text-lg font-medium">Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className={`mt-2 p-2 border rounded-lg ${errors.resume ? 'border-red-500' : ''}`}
            required
          />
          {errors.resume && <span className="text-red-500 text-sm">{errors.resume}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="coverLetter" className="text-lg font-medium">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            className="mt-2 p-2 border rounded-lg"
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default CareerForm;