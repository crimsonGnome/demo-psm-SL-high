import styled from 'styled-components';

const Logo = styled.div`
  position: relative;
  width: 130px;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  align-content: center;

  img {
    width: 120px;
    height: auto;
  }
  ::before {
    content: 'EST.';
    display: block;
    position: absolute;
    top: 35%;
    transform: translateY(-100%, -50%);
    left: -34px;
    color: ${props => props.theme.primary};
    border-top: 1px solid ${props => props.theme.primary};
    border-bottom: 1px solid ${props => props.theme.primary};
  }
  ::after {
    content: '1962';
    display: block;
    position: absolute;
    top: 35%;
    transform: translateY(-100%, -50%);
    right: -31px;
    color: ${props => props.theme.primary};
    border-top: 1px solid ${props => props.theme.primary};
    border-bottom: 1px solid ${props => props.theme.primary};
  }
`;

const LogoInverse = styled.div`
  position: relative;
  text-align: center;
  align-content: center;

  img {
    width: auto;
    height: 100px;
  }
  ::before {
    content: 'EST.';
    display: block;
    position: absolute;
    top: 35%;
    transform: translateY(-100%, -50%);
    left: -23px;
    color: white;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
  ::after {
    content: '1962';
    display: block;
    position: absolute;
    top: 35%;
    transform: translateY(-100%, -50%);
    right: -25px;
    /* margin-right: 20px; */
    color: white;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
`;

export default Logo;
export { LogoInverse };
