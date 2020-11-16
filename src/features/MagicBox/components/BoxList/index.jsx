import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

BoxList.propTypes = {
  boxList: PropTypes.array,
};

BoxList.defaultProps = {
  boxList: [],
};

function BoxList({ boxList }) {
  return (
    <div>
      <ul className="box-list">
        {boxList.map((box) => (
          <li key={box.luckyNumber}>
            <Box color={box.color} luckyNumber={box.luckyNumber} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoxList;
