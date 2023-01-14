import { v2 as client } from 'cloudinary'

client.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_SECRET,
  secure: true,
})

export { client }
