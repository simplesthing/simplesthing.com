import Link from "next/link";
import { BorderCircle, DefaultMarginTop } from "./styles/utilities";

const ProfilePic = () => (
  <>
    <DefaultMarginTop />
    <Link href="/">
      <a>
        <BorderCircle
          src='/images/profile_waifu.jpg'
          height={108}
          width={108}
          alt="simplesthing avatar in waifu style" />
      </a>
    </Link>
  </>
);


export default ProfilePic;