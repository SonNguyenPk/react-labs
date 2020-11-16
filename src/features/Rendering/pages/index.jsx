import './index.scss';

function RenderingFeature() {
  const name = 'Easy Frontend';
  const age = 18;
  const isMale = true;

  const showStudent = true;
  const studentA = {
    name: 'Son',
    age: 18,
  };

  const studentList = [
    { id: null, name: 'Son', age: 27 },
    { id: undefined, name: 'Nguyễn', age: 18 },
  ];

  const colorList = ['green', 'goldenrod', 'yellow'];

  return (
    <section className="app">
      <h1>Hello {name}!</h1>
      <p>Age: {age + 2}</p>
      <p>Is Male: {isMale ? 'yes' : 'no'}</p>
      <p>
        Render null/undefined: {null} {undefined}
      </p>
      {showStudent && (
        <>
          <h2>student</h2>
          <p>
            Student: {studentA.name}, Age: {studentA.age}
          </p>
        </>
      )}
      {!showStudent && <p>don&apos;t show student</p>}

      {true && <p> RENDER NE</p>}
      {false && <p> KHÔNG RENDER NE</p>}
      {null && <p> không thấy RENDER NE</p>}
      {undefined && <p>ko RENDER NE</p>}
      {0 && <p> không thấy</p>}
      {!!123 && <p> number: 123</p>}
      {!!'' && <p> empty</p>}
      {!!'hello' && <p>hello</p>}

      <ul className="student-list">
        {studentList.map((student) => (
          <li key={student.id}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
          </li>
        ))}
      </ul>

      <h2>Color List</h2>
      <ul className="color-list">
        {colorList.map((color) => (
          <li key={color} style={{ color }}>
            <p>color: {color}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RenderingFeature;
