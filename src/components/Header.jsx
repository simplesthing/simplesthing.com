import React, { Fragment } from 'react';
import styled from 'styled-components'
import { h3Size } from '../Style'

const H1 = styled.h1`
  font-size: ${h3Size};
  letter-spacing: 1px;
  margin: 0 0 5px;
`

const ProfilePicture = styled.div`
  background-image: url('http://simplesthing.com/client/dist/images/profile.gif');
  background-size: 55px;
  float: left;
  width: 55px;
  height: 55px;
  margin: 3px 10px;
`

export const Header = () => {
  return (
    <Fragment>
      <ProfilePicture />
     <div>
      <H1>simplesthing</H1>
      <span>ui developer, imperfect human</span>
     </div>
    </Fragment>
  )
}


