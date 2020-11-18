import { useState } from 'react';
import BoxList from './components/BoxList';

const FAKE_DATA = [
  {
    color: 'goldenrod',
    luckyNumber: 2,
    size: 'small',
  },
  {
    color: 'deeppink',
    luckyNumber: 5,
    size: 'medium',
  },
  {
    color: 'red',
    luckyNumber: 10,
    size: 'large',
  },
];

function MagicBoxFeature() {
  const [boxList, setBoxList] = useState(FAKE_DATA);

  const handleBoxClick = (box, idx) => {
    // remove box from list
    console.log(box, idx);
    const newBoxList = [...boxList];
    newBoxList.splice(idx, 1);

    setBoxList(newBoxList);
    console.log(boxList);
  }; // truyền hàm xuông con khi cần con sẽ gọi hàm

  return (
    <div>
      <h1>MagicBox Feature</h1>

      <BoxList boxList={boxList} onBoxClick={handleBoxClick} />
    </div>
  );
}

export default MagicBoxFeature;
