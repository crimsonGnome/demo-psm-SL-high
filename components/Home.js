import React from 'react';
import BannerImage from './BannerImage';
import Article from './Article';
import Calendar from './Calendar';
import HomeArticle from './HomeArticle';
import { BodyMargin, SeventyThirty } from './styles/BodyLayout';
import ArticleSection, {
  ExploreBanner,
  ExploreAction,
  Card,
  HomePage,
  ExploreActionRight
} from './styles/HomeStyles';
import Button, { ButtonLight } from './styles/Buttons';

const Home = () => {
  return (
    <HomePage>
      <div
        style={{
          position: 'relative',
          height: 'calc(100vh - 156px)',
          overflow: 'hidden'
        }}
      >
        <BannerImage></BannerImage>
        <div
          style={{
            content: '',
            height: 'calc(100vh - 156px)',
            clipPath: `ellipse(95% 12% at 0% 100%)`,
            background: '#fcfcfc',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
            width: '100%'
          }}
        ></div>
        <ExploreAction>
          <i className="fas fa-angle-double-down"></i> Explore Saint Lucy's
        </ExploreAction>
      </div>
      <BodyMargin>
        <ArticleSection>
          <Card>
            <div className="card-image">
              <img src="/static/Ipad.jpg" alt="Call to action 1" />
            </div>
            <div className="card-content">
              <span>IPad Initiative</span>
              <p>
                We began developing a rigorous program for our staff, faculty
                and students. We brought the iPads to the teachers for the
                2016-2017 school year and began the process of exploring how the
                devices can be used to enhance the learning environment of the
                classroom.
              </p>
              <ButtonLight>
                Read More <i className="fas fa-angle-double-right"></i>
              </ButtonLight>
            </div>
          </Card>
          <Card>
            <div className="card-image">
              <img src="/static/Cubs.jpg" alt="Call to action 1" />
            </div>
            <div className="card-content">
              <span>Lucy Cubs</span>
              <p>
                St. Lucy’s students and nearly 7,300 alumnae who believe
                educated and spiritual women can and will positively change the
                world. We proudly welcome the young girl in your life to take
                her first step in joining our Regent family by becoming a Lucy
                Cub!
              </p>
              <ButtonLight>
                Read More <i className="fas fa-angle-double-right"></i>
              </ButtonLight>
            </div>
          </Card>
          <Card>
            <div className="card-image">
              <img src="/static/talkingGirls.jpg" alt="Call to action 1" />
            </div>
            <div className="card-content">
              <span>Athletics</span>
              <p>
                The St. Lucy’s Athletic Department strives to provide our
                student athletes the opportunity to promote the lifelong skills
                needed to develop into educated, integrated, collaborative, and
                spiritual woman through their lessons of competitive sports.
              </p>
              <ButtonLight>
                Read More <i className="fas fa-angle-double-right"></i>
              </ButtonLight>
            </div>
          </Card>
          <Card>
            <div className="card-image">
              <img src="/static/SLmusical2.jpg" alt="Call to action 1" />
            </div>
            <div className="card-content">
              <span>Arts and Clubs</span>
              <p>
                A variety of social events, publications and clubs offer the
                student a choice of extracurricular activities with which to
                enrich her academic program.From Thespians Society, Regents who
                code, language clubs, and dance, we believe in creating an
                entire experience for girls to explore any interest and passion.
              </p>
              <ButtonLight>
                Read More <i className="fas fa-angle-double-right"></i>
              </ButtonLight>
            </div>
          </Card>
        </ArticleSection>
        <ExploreActionRight>
          <span>News at Saint Lucy's</span>
          <i className="fas fa-angle-double-down"></i>
        </ExploreActionRight>
      </BodyMargin>
      <section className="sectionNews">
        <BodyMargin>
          <SeventyThirty>
            <Article></Article>
            <Calendar></Calendar>
          </SeventyThirty>
        </BodyMargin>
      </section>
    </HomePage>
  );
};

export default Home;
