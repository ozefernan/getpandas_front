import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Styles } from './styles';

function Main() {
  return (
    <Styles>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          asd
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </Styles>
  );
}

export default Main;
