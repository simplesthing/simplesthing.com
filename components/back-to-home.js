import Link from "next/link";
import styled from "styled-components";

const BackToHomeStyle = styled.div`
    margin: 3rem 1rem;
`;

const BackToHome = (anchor) => {
    return (
        <BackToHomeStyle>
        <Link href={`/${anchor}`}>
          <a><p>&lt; Back to home</p></a>
        </Link>
      </BackToHomeStyle>
    );
};

export default BackToHome;