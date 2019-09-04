import Link from 'next/link';
import { Component } from 'react';
import Router from 'next/router';
import { LogoInverse } from './styles/Logo';
import Header, { LogoTitle, TopNav } from './styles/NavStyles';
import NProgress from 'nprogress';
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};
class Nav extends Component {
  state = {
    ariaControl: false
  };
  handleChange = () => {
    const val = this.state.ariaControl;
    this.setState({ ariaControl: !val });
  };
  render() {
    return (
      <Header>
        <TopNav>
          <div className="floatRight">
            <div>
              <LogoInverse>
                <img src="/static/SL-logo-inverse.png" />
              </LogoInverse>
            </div>
            <LogoTitle>
              Saint Lucy's <span>Priory High School</span>
            </LogoTitle>
          </div>

          <ul className="login">
            <li>
              <Link href="/">
                <a>Parents</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Alumni</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Login</a>
              </Link>
            </li>
          </ul>
        </TopNav>
        <div className="flex ">
          <ul className="nav">
            <li>
              <Link href="/">
                <a>Admissions</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Academics</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Athletics</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>Arts</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Faith</a>
              </Link>
            </li>
          </ul>
        </div>
      </Header>
    );
  }
}

export default Nav;
