import mongoose ,{Schema, Document} from "mongoose"

interface Contact extends Document {
   name: string;
   email: string; // This will store the HTML content
   subject: string;
   query : string;
 }

const ContactSchema = new Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   subject: { type: String, required: true },
   query : {type : String, required :  true},
},{
   timestamps: true
})

const Contact = mongoose.models.Contact || mongoose.model<Contact>('Contact', ContactSchema);
export default Contact;