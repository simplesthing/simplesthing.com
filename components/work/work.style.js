import {
    accent2,
    fontFamily,
    h5Size,
    lightBase,
    mqLarge,
    mqMedium,
    mqSmall,
    mqXlarge,
    mqXsmall,
    mqXxlarge,
    nuetral
} from "../styles/index";

import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
  `;
  
  export const MorePanel = styled.div`
    width: 100%;
    height: 200px;
    position: absolute;
    top: 600;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(49, 49, 49, 0), 75%, rgba(49, 49, 49, .8), 90%, rgba(49, 49, 49, 1));
  `;
  
  export const MoreButtonContainer = styled.div`
    display: flex;
    justify-content: center;

  `;
  export const MoreButton = styled.button`
    background-color: transparent;
    background-repeat: no-repeat;
    border-color: ${lightBase};
    border-radius: 4px;
    padding: 1px 30px;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${accent2};
    font-weight: bold;
    font-size: 24px;
    position: absolute;
    bottom: 0;
    &:hover {
      background-color:${nuetral};
    }
  `;

  export const Grid = styled.section`
    display: grid;
    max-height:${(props) => props.more ? "auto" : "800px"};
    overflow-y: hidden;
    margin-left: 2%;
    margin-right: 2%;
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
  
  export const Item = styled.article`
    position: relative;
    height: 200px;
    background: ${(props) => props.background};
    background-size: cover;
    background-repeat: no-repeat;
    border: solid 5px ${nuetral};
    border-radius: 2px;
    box-shadow:-3px 4px 5px rgba(0,0,0,.75);
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
  
  export const TintedGlass = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20%;
    background: rgba(0, 0, 0, .65);
    border-top: solid 4px ${nuetral};
  `;
  
  export const InfoContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
  `;
  
  export const InfoTitle = styled.div`
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
  
  export const Title = styled.h3`
    display: inline;
    position: relative;
    font-size: ${h5Size};
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: bold;
    color: #fff;
    letter-spacing: 1px;
  `;
  
  export const InfoIcons = styled.div`
    flex: 01 auto;
    text-align: right;
    margin-right: 1rem;
  `;
  
  export const Icon = styled.img`
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