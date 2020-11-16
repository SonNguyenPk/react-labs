import './Box.scss';
import PropType from 'prop-types';

function Box(props) {
  const { color, luckyNumber } = props;
  return (
    <div className="box" style={{ backgroundColor: color }}>
      {luckyNumber}
    </div>
  );
}

// validate dữ liệu của prop
Box.propTypes = {
  color: PropType.string,
  luckyNumber: PropType.number.isRequired,
};

// define default value cho data không required trong trường hợp thằng cha không truyển vào
Box.defaultProps = {
  color: 'black',
};

export default Box;
