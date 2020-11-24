import { useEffect, useState } from 'react';
import postApi from './api/postApi';
import studentApi from './api/Student';
import './App.scss';
import Button from './components/Button';
import Counter from './components/Counter/index,';
import MagicBoxFeature from './features/MagicBox';

function App() {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);

  const [studentLoading, setStudentLoading] = useState(true);
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await postApi.getAll({ _page: 1, _limit: 10 });

        setPostList(data);
      } catch (error) {
        console.log('Fail to fetch post', error);
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await studentApi.getAll({ _page: 1, _limit: 10 });
        setStudentList(data);
      } catch (error) {
        console.log('Fail to fetch student list', error);
      }
      setStudentLoading(false);
    })();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <ul>
        {postList.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h1>Student List</h1>
      {studentLoading && <p>Loading...</p>}
      <ul>
        {studentList.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>

      <Counter />
      <Button>Hello </Button>
      <Button
        onClick={() => {
          alert('show me ne');
        }}
      >
        Show me more
      </Button>
      <MagicBoxFeature />
    </div>
  );
}

export default App;
