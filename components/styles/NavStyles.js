import styled from 'styled-components';

const Header = styled.header`
  font-family: 'europa';
  font-weight: 900;
  display: grid;
  grid-template-columns: 1fr;
  padding-right: 100px;
  z-index: 5;

  background: white;
  .flex {
    align-self: center;
    display: flex;
    width: calc(100vw);
  }
  ul.login {
    font-size: 1.6rem;
    text-decoration: none;
    list-style-type: none;
    color: white;
    width: 20vw;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    transition: 1s;
  }

  ul.nav {
    font-size: 1.6rem;
    text-decoration: none;
    list-style-type: none;
    width: calc(100vw);
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    border-bottom: 5px solid ${props => props.theme.secondary};
    text-transform: uppercase;
    transition: 1s;
  }

  ul:hover li a {
    color: grey;
  }
  ul.login a {
    color: white;
  }
  li {
    position: relative;
    height: 100%;
    width: 100%;
    align-self: center;
    display: grid;
    letter-spacing: 0.15em;
  }
  li::after {
    content: '';
    width: 2px;
    background: ${props => props.theme.secondary};
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    bottom: 0px;
  }
  ul.login li::after {
    display: none;
    content: '';
    width: 2px;
    background: ${props => props.theme.primary};
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    bottom: 0px;
  }
  .logo {
    max-height: 100px;
    max-width: 100px;
    overflow: hidden;
  }
  img {
    position: relative;
    height: 100px;
  }

  a {
    align-self: center;
    justify-self: center;
    text-decoration: none;
    letter-spacing: 0.15em;
    color: black;
    cursor: pointer;
  }
  a:visited {
    color: black;
  }
  ul:hover li:hover a {
    color: white;
  }
  ul.nav:hover li:hover a {
    color: ${props => props.theme.primaryLight};
  }
  position: fixed;
`;
const LogoTitle = styled.h1`
  text-align: center;
  font-family: 'Cinzel';
  line-height: 0.85;
  font-size: 4.5rem;
  width: 400px;
  color: white;
  margin: 0;
  align-self: center;
  display: inline-block;
  span {
    text-align: right;
    display: block;
    font-size: 2.5rem;
    color: ${props => props.theme.secondary};
  }
`;

const TopNav = styled.div`
  align-self: left;
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.primary};
  color: white;
  width: 100vw;
  padding: 10px 5vw;

  .floatRight {
    display: grid;
    grid-gap: 45px;
    grid-template-columns: 1fr 4fr;
  }
`;

export default Header;
export { TopNav };
export { LogoTitle };
