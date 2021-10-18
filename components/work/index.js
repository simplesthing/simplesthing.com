import {
  accent2,
    fontFamily,
    h5Size,
    mqLarge,
    mqMedium,
    mqSmall,
    mqXlarge,
    mqXsmall,
    mqXxlarge
} from "../styles/index";
import Link from "next/link";
import styled from "styled-components";
import { WORK_HISTORY } from "./constants";

const Grid = styled.section`
  display: grid;
  margin-left: 1%;
  margin-right: 1%;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  @media ${mqXsmall} {
    margin-left: -1%;
    margin-right: -1%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media ${mqSmall} {
    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
  }
  @media ${mqMedium} {
    grid-template-columns: repeat(auto-fill, minmax(333px, 1fr));
  }
  @media ${mqLarge} {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
  @media ${mqXlarge} {
    grid-template-columns: repeat(auto-fill, minmax(490px, 1fr));
  }
  @media ${mqXxlarge} {
    grid-template-columns: repeat(auto-fill, minmax(650px, 1fr));
  }
`;

const Item = styled.article`
  position: relative;
  height: 200px;
  background: ${(props) => props.background};
  background-size: cover;
  background-repeat: no-repeat;
  border: solid 4px ${accent2};
  border-radius: 2px;
  margin: 4% 3%;
  @media ${mqXsmall} {
    margin: 4%;
    height: 325px;
  }
  @media ${mqSmall} {
    height: 255px;
  }
  @media ${mqMedium} {
    margin: 2%;
    height: 375px;
  }
  @media ${mqXlarge} {
    height: 433px;
  }
`;

const TintedGlass = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  background: rgba(107, 74, 92, .7);
  border-top: solid 4px ${accent2};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const InfoTitle = styled.div`
  flex: 0 1 auto;
  margin: 1rem 0 1rem 1rem;
  @media ${mqSmall} {
    margin-top: 1.1rem;
  }
  @media ${mqMedium} {
    margin-top: 1.25rem;
  }
  @media ${mqXlarge} {
    margin-top: 1.75rem;
  }
`;

const Title = styled.h3`
  display: inline;
  position: relative;
  font-size: ${h5Size};
  font-family: ${fontFamily};
  font-style: normal;
  color: #fff;
`;

const InfoIcons = styled.div`
  flex: 01 auto;
  text-align: right;
  margin-right: 1rem;
`;

const Icon = styled.img`
    position: relative;
    top: 1.1rem;
    margin-left:.5rem;
    width: 1.5rem;
    height: 1.5rem;
    @media ${mqSmall} {
        width: 2rem;
        height: 2rem;
        top: .75rem;
        height: 2rem;
    }
    @media ${mqMedium} {
        top: 1rem;
    }
    @media ${mqXlarge} {
        width: 2.5rem
        height: 2.5rem;
        top: 1.1rem;
    }
`;

const Work = () => (
    <Grid>
        {WORK_HISTORY.map((item) => {
          const Card = (
            <Item background={item.background} key={item.title}>
              <TintedGlass >
                  <InfoContainer>
                    <InfoTitle>
                      <Title>{item.title}</Title>
                    </InfoTitle>
                    <InfoIcons
                      role="list"
                      aria-label={`Languages used to code projects at ${item.title}`}
                      >
                      {item.icons.map((icon) => (
                        <Icon
                        src={icon.url}
                        title={icon.title}
                        alt={icon.title}
                        key={Math.random()}
                        role="listitem"
                        />
                        ))}
                    </InfoIcons>
                  </InfoContainer>
                </TintedGlass>
                <div
                  style={{ background: item.background }}
                  role="img"
                  aria-label={item.description}
                  ></div>
            </Item>);
          return item.path ? (item.external ? (<Link href={item.path}  key={item.title}><a target="_blank">{Card}</a></Link>) : (<Link href={item.path} key={item.title}><a>{Card}</a></Link>)) : Card;
        }
        )}
      </Grid>
);

export default Work;