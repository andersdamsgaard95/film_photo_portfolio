// /app/api/fetchImages/route.ts
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// Configure Cloudinary
cloudinary.config({ 
    cloud_name: 'dtcdadasc', 
    api_key: '474177536948712', 
    api_secret: 'qHyZiPWWUfgAl7jJZtOSSFjNNeE'
  });

// Fetch images with metadata
export async function GET() {
  try {
    // Fetch images and metadata from Cloudinary
    const result = await cloudinary.api.resources({
      type: "upload",        // Only uploaded resources
      prefix: "",            // Define folder prefix if needed
      context: true,         // Include metadata
      max_results: 500,      // Maximum results returned  
    });

    // Map the result to extract data (URLs and metadata)
    const images = result.resources.map((image: any) => (
       {
          url: image.url,
          description: image.context?.custom?.description || "",
          where: image.context?.custom?.where || '',
          featured: image.context?.custom?.featured || null,
          view: image.context?.custom?.view || null,
          sortOrder: parseInt(image.context?.custom?.sortOrder) || null,
          tags: image.context?.custom?.tags ? image.context.custom.tags.split(', ') : [],
          public_id: image.public_id
        }
    ));

    // Return the images as a JSON response
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
  }
}