import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
// import './styles.css'

const slides = [
  {
    id: 0,
    url:
      'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i',
    word: 'where community comes first'
  },
  {
    id: 1,
    url:
      'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80',
    word: 'Engage in Creative Endeavors'
  },
  {
    id: 2,
    url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80',
    word: 'Innovative Curriculum'
  },
  {
    id: 3,
    url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80',
    word: 'With Honor and Moral Courage'
  }
];

const BannerImage = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });
  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 4), 6000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="bg"
      style={{
        ...props,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100vh - 156px)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        willChange: 'opacity',
        backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`
      }}
    >
      <div
        style={{
          padding: ' 5px 5px 0px 5px',
          top: '15%',
          left: '10%',
          background: 'rgba(51,51,51,.5)',
          maxWidth: ' 800px',
          boxSizing: ' border-box',
          position: 'relative'
        }}
      >
        <h4
          style={{
            padding: 0,
            margin: 0,
            color: ' #FFFFFF',
            marginBottom: '10px',
            fontWeight: ' 900',
            fontSize: '3.1em',
            textTransform: 'uppercase'
          }}
        >
          {item.word}
        </h4>
      </div>
    </animated.div>
  ));
};

export default BannerImage;
