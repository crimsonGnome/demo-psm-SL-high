import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Nav from './Nav';
import Meta from './Meta';
import Footer from './Footer';

const theme = {
  maxWidth: '1000px',
  bs:
    '0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)',
  LargeDesktopView: 'max-width: 1513px',
  DesktopView: 'max-width: 1388px',
  DesktopViewMidSmall: 'max-width: 1200px',
  DesktopViewSmall: 'max-width: 1118px',
  HorizontalNav: 'max-width: 1024px',
  LargeTabletView: 'max-width: 961px',
  tabletView: 'max-width: 845px',
  tabletViewMed: 'max-width: 768px',
  phoneViewLarge: 'max-width: 542px',
  primary: '#13275d',
  primaryLight: '#15aabf',
  secondary: '#d1bf91'
};

const StyledPage = styled.div``;

const Inner = styled.div`
  padding-top: 156px;
`;

const GlobalStyle = createGlobalStyle`  
  @font-face {
    font-family: 'europa';
    src: url('https://use.typekit.net/af/3e64fb/00000000000000003b9b12fe/27/l?subset_id=2&fvd=n3&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/3e64fb/00000000000000003b9b12fe/27/d?subset_id=2&fvd=n3&v=3')
        format('woff'),
      url('https://use.typekit.net/af/3e64fb/00000000000000003b9b12fe/27/a?subset_id=2&fvd=n3&v=3')
        format('opentype');
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    font-family: 'Cinzel';
    src: url('https://fonts.gstatic.com/s/cinzel/v9/8vIJ7ww63mVu7gt79mT7.woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    background: #fcfcfc;
    font-size: 1.6rem;
    line-height: 2;
    font-family: 'europa';
    
  }

  .img-loading {
    opacity: 0;
  }

  .img-loaded {
    animation: fadeInImg cubic-bezier(0.23, 1, 0.32, 1) 1;
    position: relative;
    opacity: 1;
    animation-fill-mode: forwards;
    animation-duration: 2s;
    animation-delay: 0.1s;
  }
  
`;
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle></GlobalStyle>
          <Meta />
          <Nav />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
