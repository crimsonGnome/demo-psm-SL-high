import React from 'react';
import { Card, ArticleContainer } from './styles/HomeStyles';
const Article = () => {
  return (
    <div>
      <h3 className="blog">Blog</h3>
      <ArticleContainer>
        <Card>
          <div className="article-image">
            <img src="/static/allGirls.jpg" alt="Call to action 1" />
          </div>
          <div className="article-title">
            <span>Dolor sit amet consectetur.</span>
          </div>
        </Card>
        <Card>
          <div className="article-image">
            <img src="/static/SL-School-Aerial.jpg" alt="Call to action 1" />
          </div>
          <div className="article-title">
            <span> Ipsum dolor sit.</span>
          </div>
        </Card>
        <Card>
          <div className="article-image">
            <img src="/static/talkingGirls.jpg" alt="Call to action 1" />
          </div>
          <div className="article-title">
            <span>Lorem, ipsum dolor.</span>
          </div>
        </Card>
        <Card>
          <div className="article-image">
            <img src="/static/girlsStock.jpg" alt="Call to action 1" />
          </div>
          <div className="article-title">
            <span>Lorem, ipsum.</span>
          </div>
        </Card>
        <Card>
          <div className="article-image">
            <img src="/static/talkingGirls.jpg" alt="Call to action 1" />
          </div>
          <div className="article-title">
            <span>Lorem, ipsum.</span>
          </div>
        </Card>
        <Card>
          <div className="article-image">
            <img src="/static/SLmusical.jpg" alt="Call to action 1" />
          </div>
          <div className="article-title">
            <span>Lorem, ipsum.</span>
          </div>
        </Card>
      </ArticleContainer>
      <h3 className="blog primaryLight">Read More >></h3>
    </div>
  );
};

export default Article;
