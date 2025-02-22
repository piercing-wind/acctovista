import mongoose, { Schema, Document } from "mongoose";

interface Career extends Document {
  name: string;
  email: string; // This will store the HTML content
  countryCode: string;
  phone: string;
  jobProfile: string;
  customPosition?: string;
  position: string;
  resume: string;
  fileKey: string;
  coverLetter?: string;
}

const CareerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  countryCode: { type: String, required: true },
  phone: { type: String, required: true },
  jobProfile: { type: String, required: true },
  customPosition: { type: String },
  position: { type: String, required: true },
  resume: { type: String, required: true },
  fileKey: { type: String, required: true },
  coverLetter: { type: String }
}, {
  timestamps: true
});

const Career = mongoose.models.Career || mongoose.model<Career>('Career', CareerSchema);
export default Career;