import React from 'react';
import ReactLoader from 'react-loader-spinner';
import { connect } from 'react-redux';

import './loader.scss';

const Loader = props => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="loader-outer">
      <div className="loader-inner">
        <ReactLoader type="Puff" color="#ff474f" height="100" width="100" />
      </div>
    </div>
  );
};

const stateToProps = state => ({
  show: state.loader
});

export default connect(stateToProps)(Loader);
