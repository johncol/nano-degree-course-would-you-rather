import React from 'react';
import { Link } from 'react-router-dom';

import './question-not-found.scss';

const QuestionNotFound = () => (
  <div className="question-not-found">
    <span className="question-not-found__text">Question Not Found</span>
    <Link className="question-not-found__link" to="/">
      Go home
    </Link>
  </div>
);

export default QuestionNotFound;
