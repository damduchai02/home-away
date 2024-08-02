import { fetchProfile } from "@/utils/actions";

async function ProfilePage() {
  const profile = await fetchProfile();
  console.log(profile);
  return <h1>ProfilePage</h1>;
}

export default ProfilePage;
