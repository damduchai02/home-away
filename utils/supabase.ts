import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadImage = async (image: File, bucket: string) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, {
      cacheControl: "3600",
      upsert: false,
    });
  if (!data || error) throw new Error("Image upload failed");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
