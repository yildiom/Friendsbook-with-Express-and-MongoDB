import React from 'react';
import { Container } from 'react-bootstrap';

const Layout = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return <Container> {children}</Container>;
};

export default Layout;
