import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutPage } from '../../layout/LayoutPage';
import { Error } from './styled';
import errorpage from '../../assets/errorpage.gif';

function RedirectPage() {
  return (
    <LayoutPage>
      <Error>
        <img src={errorpage} alt="" />
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </Error>
    </LayoutPage>
  );
}

export default RedirectPage;
