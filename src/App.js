import { getCases } from './features/cases/casesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Loading from './components/Loading';

function App() {
  const { isLoading } = useSelector((store) => store.cases);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCases());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <section className='container'>
      <Header />
      <Table />
    </section>
  );
}

export default App;
