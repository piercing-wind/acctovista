import mongoose ,{Schema, Document} from "mongoose"

export interface BlogObject {
   _id: string;
   title: string;
   content: string;
   opengraphImage: string;
   author: string;
   date: string;
   createdAt: string;
   updatedAt: string;
   __v: number;
   description: string;
 }

interface IBlog extends Document {
   title: string;
   content: string; // This will store the HTML content
   opengraphImage: string;
   author : string;
   date: Date;
   description: string;
 }

const BlogSchema = new Schema({
   title: { type: String, required: true },
   content: { type: String, required: true },
   opengraphImage: { type: String, required: true },
   author : {type : String, default: "AcctoVista"},
   date : { type: Date, default: Date.now },
   description: { type: String, required: true }
},{
   timestamps: true
})

const Blog = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
export default Blog;