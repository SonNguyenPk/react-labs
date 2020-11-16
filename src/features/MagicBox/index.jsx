import Box from './components/Box';
import BoxList from './components/BoxList';

function MagicBoxFeature() {
  const box = { color: 'blue', luckyNumber: 13 };
  const boxList = [
    {
      color: 'goldenrod',
      luckyNumber: 2,
    },
    {
      color: 'deeppink',
      luckyNumber: 5,
    },
    {
      color: 'red',
      luckyNumber: 10,
    },
  ];

  return (
    <div>
      <h1>MagicBox Feature</h1>

      <BoxList boxList={boxList} />

      <Box color="green" luckyNumber={11} />
      <Box color={box.color} luckyNumber={box.luckyNumber} />
      <Box luckyNumber={4} />
    </div>
  );
}

export default MagicBoxFeature;
