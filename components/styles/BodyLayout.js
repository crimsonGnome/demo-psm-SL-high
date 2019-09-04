import styled from 'styled-components';

const MainBody = styled.div`
  margin: 2rem;
  padding: 2rem;

  @media (${props => props.theme.tabletView}) {
    margin: 1rem;
    padding: 1rem;
  }
`;
const BodyMargin = styled.div`
  margin: 0 5vw;
`;
const DualLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;

  .center {
    text-align: center;
  }
  @media (${props => props.theme.tabletViewMed}) {
    grid-template-columns: 1fr;
  }
`;

const DualList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-items: left;
  align-items: center;
  justify-self: center;
  align-self: center;
  text-decoration: none;
  padding: 0;
  list-style-type: none;
  font-weight: 200;
  padding: 0 20px;
`;

const SixtyForty = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
  @media (${props => props.theme.phoneViewLarge}) {
    grid-template-columns: 1fr;
  }
`;
const ThirtySeventy = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
  @media (${props => props.theme.phoneViewLarge}) {
    grid-template-columns: 1fr;
  }
`;
const SeventyThirty = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
  @media (${props => props.theme.phoneViewLarge}) {
    grid-template-columns: 1fr;
  }
`;

export { MainBody };
export { BodyMargin };
export { DualLayout };
export { SixtyForty };
export { DualList };
export { ThirtySeventy };
export { SeventyThirty };
