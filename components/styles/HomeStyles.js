import styled from 'styled-components';

const ArticleSection = styled.section`
  position: relative;
  display: grid;
  padding: 50px 50px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  ::before {
    position: absolute;
    display: block;
    content: '';
    height: 105%;
    width: 3px;
    background: ${props => props.theme.secondary};
    border-right: 1px solid #ffffff;
    margin-left: 10px;
    bottom: 0;
    z-index: -1;
  }
`;

const ExploreAction = styled.h3`
  position: absolute;
  color: ${props => props.theme.secondary};
  text-shadow: 1px 1px #bfab77;
  font-family: 'Cinzel';
  z-index: 3;
  font-size: 3.5rem;
  font-weight: 600;
  margin: 0;
  bottom: 0;
  padding-left: 5vw;
  ::before {
    position: absolute;
    display: block;
    content: '';
    height: 100%;
    width: 3px;
    background: ${props => props.theme.secondary};
    border-right: 1px solid #ffffff;
    margin-left: 10px;
    bottom: -45px;
    z-index: -1;
  }
`;
const ExploreActionRight = styled.div`
  position: relative;
  text-align: right;
  color: ${props => props.theme.primary};
  font-family: 'Cinzel';
  z-index: 3;
  font-size: 3.5rem;
  margin: 0;
  bottom: 0;
  right: 0;
  span {
    padding-right: 10px;
  }
  ::after {
    position: absolute;
    right: 0;
    display: block;
    content: '';
    height: 100%;
    width: 3px;
    background: ${props => props.theme.primary};
    margin-right: 9px;
    bottom: -4.1rem;

    z-index: 3;
  }
  ::before {
    position: absolute;
    display: block;
    content: '';
    height: 100%;
    width: 3px;
    background: ${props => props.theme.secondary};
    border-right: 1px solid #ffffff;
    margin-left: 10px;
    z-index: -1;
  }
`;
const ExploreBanner = styled.div`
  color: white;
  background: rgba(51, 51, 51, 0.5);
  font-family: 'Cinzel';
`;

const HomeInfoTab = styled.section`
  margin: 50px 10vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  margin-bottom: 100px;

  img {
    background-position: center center;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const Card = styled.div`
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: #ffff;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  .card-image {
    position: relative;
    transform: scale(1);
    background-color: #000;

    overflow: hidden;
  }
  .article-image {
    position: relative;
    transform: scale(1);
    background-color: #000;

    overflow: hidden;
  }

  img {
    display: block;
    border-radius: 2px 2px 0 0;
    background-position: center center;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.9;
    width: 100%;
    transition: opacity 0.6s ease, transform 0.6s ease;
    :hover {
      opacity: 0.75;
      transform: scale(1.1);
    }
  }
  span {
    color: ${props => props.theme.primary};
    max-width: 100%;
    font-size: 24px;
    font-weight: 300;
  }
  .card-content {
    font-size: 16px;
    padding: 24px;
    border-radius: 0 0 2px 2px;
  }
  .article-title {
    z-index: 2;
    font-size: 16px;
    padding: 8px;
    border-radius: 0 0 2px 2px;
  }
`;
const ArticleContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const HomePage = styled.div`
  .sectionNews {
    width: 100%;
    background: #f5f5f5;
  }
  .blog {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 10px;
    align-items: center;
    ::before,
    ::after {
      display: block;
      content: '';
      height: 2px;
      background: linear-gradient(
        to var(--direction, left),
        ${props => props.theme.primary},
        transparent
      );
    }
    ::after {
      --direction: right;
    }
  }
  .primaryLight {
    cursor: pointer;
    color: ${props => props.theme.primaryLight};
  }
`;

export default ArticleSection;
export { ExploreAction };
export { ExploreActionRight };
export { ExploreBanner };
export { Card };
export { HomeInfoTab };
export { ArticleContainer };
export { HomePage };
