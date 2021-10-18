import { BorderCircle, DefaultMarginTop } from "./styles/utilities";

const ProfilePic = () => (
  <>
    <DefaultMarginTop />
    <BorderCircle
      src='/images/profile_waifu.jpg'
      height={108}
      width={108}
      alt="simplesthing avatar in waifu style" />
  </>
);


export default ProfilePic;