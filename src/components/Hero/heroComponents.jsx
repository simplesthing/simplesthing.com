import styled from 'styled-components';
import { 
    h1Size, 
    h2Size, 
    h3Size, 
    h4Size,
    h5Size,
    h6Size,
    accent1, 
    mqXsmall, 
    mqSmall, 
    mqMedium, 
    mqLarge, 
    mqXlarge,
    mqXxlarge,
    fontFamily, 
    marginBase } from '../../Style'

export const Wrapper = styled.div`
    position: relative;
    margin: 0 auto;
    display: block;
    height: 100%;
    width: 100%;
    h1 {
        font-size: ${h3Size};
        @media ${mqMedium} {
            font-size: ${h2Size};
        }
        @media ${mqLarge} {
            font-size: ${h1Size};
        }
    }
`

export const Grid = styled.div`
    display: grid;
    margin-left: -1%;
    margin-right: -1%;
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    @media ${mqXsmall} {
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
`
  
export const Item = styled.div`
    position: relative;
    height: 200px;
    background: ${props => props.background};
    background-size: cover;
    background-repeat: no-repeat;
    border: solid 4px #fff;
    border-radius: 20px;
    margin: 2%;
    @media ${mqXsmall} {
        height: 325px;
    }
    @media ${mqSmall} {
        height: 255px;
    }
    @media ${mqMedium} {
        height: 375px;
    }
    @media ${mqXlarge} {
        height: 433px;
    }
`

export const TintedGlass = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20%;
    background: rgba(42, 0, 42, .8);
    border-radius: 0px 0px 20px 20px;
    border-style: solid;
    border-width: 2px 0 0 0;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`

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
`
export const Title = styled.h2`
    display: inline;
    position: relative;
    font-size: ${h5Size};
    font-family: ${fontFamily};
    color: #fff;
`

export const InfoIcons = styled.div`
    flex: 01 auto;
    text-align: right;
    margin-right: 1rem;
`
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
`

export const Contacts = styled.ul`
    display: block;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    margin-left: -5px;
    margin-bottom: ${marginBase};
    li {
    display: inline-block;
    margin-right: 4%;
    }
`

export const SocialLink = styled.a`
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 100%;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
    margin-top: 15px;
    font-size: 20px;
    color: #fff;
    background: 0 0;
    transition: all .3s ease-in-out;
    &:hover, &:focus, &:active, &:visited {
    border: solid 2px #fff;
    color: ${accent1};
    background: #fff;
    }
`