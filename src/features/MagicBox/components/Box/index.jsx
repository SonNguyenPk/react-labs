import './Box.scss';
import PropTypes from 'prop-types';

const sizeMap = {
  small: '40px',
  medium: '60px',
  large: '90px',
};

function Box({ box, onClick }) {
  const { color = 'black', luckyNumber, size = 'medium' } = box;
  const height = sizeMap[size];

  const handleRemoveClick = () => {
    if (onClick) onClick(box);
  };

  return (
    <div className="box" style={{ backgroundColor: color, height }}>
      {luckyNumber}

      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
}

// validate dữ liệu của prop
Box.propTypes = { box: PropTypes.object, onClick: PropTypes.func };

// define default value cho data không required trong trường hợp thằng cha không truyển vào
Box.defaultProps = {
  box: {},
  onClick: null,
};

export default Box;
