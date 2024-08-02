import { fetchProfileImage } from "@/utils/actions";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const profileImage = await fetchProfileImage();

  if (profileImage)
    return (
      <Image
        src={profileImage}
        alt="profile image"
        width={24}
        height={24}
        className="h-6 w-6 rounded-full object-cover"
      />
    );

  return <LuUser2 className="h-6 w-6 rounded-full bg-primary text-white" />;
}

export default UserIcon;
