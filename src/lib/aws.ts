import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Function to initialize the S3 client with configuration
export const awsS3Config = () => {
   const client = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_REGION, // e.g., "us-west-2"
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    },
  });
   return client;
};

export const generatePublicFileAccessURL = async (fileKey: string): Promise<string> => {
   const url = "https://d11wbp5a59q34o.cloudfront.net" + '/' + fileKey;
   return url;
};

export const uploadToS3 = async (fileName: string, fileSize : number, fileType: string, user: string) => {
   try {
   
      const client =  awsS3Config();
      const fileKey = 'resumes/' + user + "/" + Date.now().toString() + fileName.replace(" ", "_");
      
      const command = new PutObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
        Key: fileKey,
        ContentType :fileType,
        ContentLength : fileSize,
        Metadata:{
          userId : user,
        }
      });

      const [signedUrl, downloadUrl] = await Promise.all([
        getSignedUrl(client, command, { expiresIn: 60 }), 
        generatePublicFileAccessURL(fileKey)
      ])
      
      console.log(signedUrl);
      return Promise.resolve({signedUrl, fileKey, downloadUrl});
    } catch (error) {
      console.log(error);
      throw error;
    }
};
