import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import './BoxList.scss';

BoxList.propTypes = {
  boxList: PropTypes.array,
  onBoxClick: PropTypes.func,
};

BoxList.defaultProps = {
  boxList: [],
  onBoxClick: null,
};

function BoxList({ boxList, onBoxClick }) {
  return (
    <div>
      <ul className="box-list">
        {boxList.map((box, idx) => (
          <li key={box.luckyNumber}>
            <Box box={box} onBoxClick={onBoxClick && onBoxClick(box, idx)}>
              BOX {box.luckyNumber}
            </Box>

            {/* <button
              onClick={(box) => {
                onBoxClick && onBoxClick(box, idx);
              }}
            >
              Remove
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoxList;
