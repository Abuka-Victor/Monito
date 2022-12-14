import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function About() {
  return (
    <div>
      <Navbar />
      <p>
        Monito is an app mainly for students who want to declutter their lives.
        It stems from a problem observed in Nigerian tertiary institutions where
        students find it difficult to find important information on class group
        chats due to the amount of not so relevant conversations happening on
        said group chats. It is intended as a virtual notice board of some sort
        to get students up to speed on the latest info at every point in time.
        The duty to post such information falls on the class representatives who
        will invite class members to notice boards.
      </p>
      <Footer />
    </div>
  );
}

export default About;
