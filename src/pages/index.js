import React from 'react';
import { Hero, MyImage, Intro } from '../layouts/styles/index.styles';

const IndexPage = () => (
  <div>
    <Hero>
      <MyImage src={'https://avatars3.githubusercontent.com/u/22195362?v=4'} />
      <Intro>
        <h1>I am Harshit Pant</h1>
        <h4>I am a fullstack web developer. I make excellent websites.</h4>
      </Intro>
    </Hero>
  </div>
);

export default IndexPage;
