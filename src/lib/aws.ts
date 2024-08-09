import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Function to initialize the S3 client with configuration
export const awsS3Config = async () => {
  return new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_REGION, // e.g., "us-west-2"
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    },
  });
};

// Function to upload a file to S3 and return signed URL
export const uploadToS3 = async (fileName: string, fileType: string, user: string) => {
  try {
    const client = await awsS3Config();
    const fileKey = `resume/${user}/${Date.now()}_${fileName.replace(" ", "_")}`;

    const command = new PutObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME as string,
      Key: fileKey,
      ContentType: fileType,
      Metadata: {
        userId: user,
      },
    });

    // Generate a signed URL that the client can use to upload the file
    const signedUrl = await getSignedUrl(client, command, { expiresIn: 300 }); // URL expires in 300 seconds (5 minutes)

    console.log("Signed URL:", signedUrl);

    return { uploadUrl: signedUrl, fileKey };
  } catch (error) {
    console.error("Error generating signed URL:", error);
    throw error;
  }
};
