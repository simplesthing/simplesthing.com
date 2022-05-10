import { Grid, Icon, InfoContainer, InfoIcons, InfoTitle, Item, TintedGlass, Title, Wrapper } from "./work.style";

import Link from "next/link";
import { useState } from "react";

const Work = ({ list }) => {
  const [showMore] = useState(false);
  return (
    <Wrapper>
      <Grid more={!showMore}>
        {!!list && list.map((item) => {
          const Card = (
            <Item background={item.background} key={item.title} id={item.anchor}>
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

    </Wrapper>
  );
};

export default Work;