import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

import Foot from './styles/FooterStyles';
import Logo from './styles/Logo';

const Motto = () => {
  const [isToggled, setToggle] = useState(false);
  const transitions = useTransition(isToggled, null, {
    from: { postion: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });
  useEffect(
    () =>
      void setTimeout(() => {
        setToggle(!isToggled);
      }, 6000),
    [isToggled]
  );
  return transitions.map(({ item, key, props }) =>
    item ? (
      <animated.div key={key} style={props}>
        <div className="school-moto">
          <span className="first">Light</span>
          <span className="second">Truth</span>
          <span className="third">Peace</span>
        </div>
      </animated.div>
    ) : (
      <animated.div key={key} style={props}>
        <div className="school-moto">
          <span className="first">Lux</span>
          <span className="second">Veritas</span>
          <span className="third">Pax</span>
        </div>
      </animated.div>
    )
  );
};

const Footer = () => {
  return (
    <Foot>
      <div className="min-height-motto">
        <Motto></Motto>
      </div>
      <div className="block-logo">
        <Logo>
          <img src="/static/SL-logo-blue.png" alt="Pomona Catholic Crest" />
        </Logo>
      </div>
      <h3 className="school-name">Saint Lucy's Priory High School</h3>
      <div>
        <div>655 W. Sierra Madre Avenue | Glendora, CA 91741 </div>
        <div>(626) 335-3322</div>
      </div>
    </Foot>
  );
};

export default Footer;
