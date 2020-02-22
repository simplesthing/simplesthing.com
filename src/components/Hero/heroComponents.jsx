import styled from 'styled-components';
import { 
    h1Size, 
    h2Size, 
    h3Size, 
    h4Size, 
    accent1, 
    mqXsmall, 
    mqSmall, 
    mqMedium, 
    mqLarge, 
    mqXlarge, 
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
    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
    @media ${mqSmall} {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
    @media ${mqMedium} {
     
    grid-template-columns: repeat(auto-fill, minmax(425px, 1fr));
    }
    @media ${mqLarge} {
        
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    }
    @media ${mqXlarge} {
     
        grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
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
    &:nth-child(1){
        margin-top: 0;
    }
    &:nth-child(2){
        margin-top: 0;
    }
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

export const TextBg = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20%;
    background: rgba(42, 0, 42, .8);
    border-radius: 0px 0px 20px 20px;
    border-style: solid;
    border-width: 2px 0 0 0;
`

export const Title = styled.h2`
    position: absolute;
    bottom: 0;
    font-size: ${h4Size};
    font-family: ${fontFamily};
    color: #fff;
    margin: 4%;
    span {
    font-size: .85rem;
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