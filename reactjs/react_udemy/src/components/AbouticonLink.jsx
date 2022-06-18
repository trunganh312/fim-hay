import { FaQuestion } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

function AbouticonLink(props) {
  return (
    <div className="about-link">
      <Link
        to={{
          pathname: '/'
        }}
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AbouticonLink;
