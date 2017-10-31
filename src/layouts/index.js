import React from 'react';
import './index.css';
import 'typeface-quicksand';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  Navbar,
  NavItem,
  NavList,
  NavLink,
  Title
} from './styles/layout.styles';

const Header = () => (
  <Navbar>
    <NavItem>
      <NavList>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Bio</NavLink>
        </li>
      </NavList>
    </NavItem>
    <NavItem>
      <NavList>
        <Title>HP</Title>
      </NavList>
    </NavItem>
    <NavItem>
      <NavList>
        <li>
          <NavLink>Blog</NavLink>
        </li>
        <li>
          <NavLink>Contact</NavLink>
        </li>
      </NavList>
    </NavItem>
  </Navbar>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
