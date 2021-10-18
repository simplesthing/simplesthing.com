
import { useState } from "react";
import Link from "next/link";
import { WORK_HISTORY } from "./constants";
import { Wrapper, MorePanel, MoreButtonContainer, MoreButton, Grid, Item, TintedGlass, InfoContainer, InfoTitle, InfoIcons, Title, Icon } from "./work.style";

const Work = () => {
  const [showMore, setShowMore] = useState(true);
  return (
    <Wrapper>
      <Grid more={!showMore}>
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
          return item.path ? (item.external ? (<Link href={item.path} key={item.title}><a target="_blank">{Card}</a></Link>) : (<Link href={item.path} key={item.title}><a>{Card}</a></Link>)) : Card;
        }
        )}
      </Grid>
      {showMore && <MorePanel>
        <MoreButtonContainer>
          <MoreButton onClick={() =>  setShowMore(false)}>see more</MoreButton>
        </MoreButtonContainer>
      </MorePanel>
      }
      {!showMore && 
        <MoreButtonContainer>
          <MoreButton onClick={() =>  setShowMore(true)}>see less</MoreButton>
        </MoreButtonContainer>
    
      }
    </Wrapper>
  );
};

export default Work;