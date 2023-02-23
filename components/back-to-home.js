import Link from "next/link";
import styled from "styled-components";

const BackToHomeStyle = styled.div`
    margin: 3rem 1rem;
`;

const HOME = process.env.VERCEL_ENV === "development" ? process.env.VERCEL_URL : "https://www.simplesthing.com/";


const BackToHome = ({ anchor = "" }) => {
  return (
    <BackToHomeStyle>
      <Link legacyBehavior href={`${HOME}${anchor}`}>
        <a><p>&lt; Back to home</p></a>
      </Link>
    </BackToHomeStyle>
  );
};

export default BackToHome;