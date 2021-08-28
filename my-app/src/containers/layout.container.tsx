import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  background: #f5f8f7;
  display: flex;
`;

const LayoutContainer: FunctionComponent<any> = () => {
  return <Layout />;
};

export default LayoutContainer;
