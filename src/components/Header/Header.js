import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const { cases } = useSelector((store) => store.cases);

  const {
    death,
    discharged,
    totalActiveCases,
    totalConfirmedCases,
    totalSamplesTested,
  } = cases.data;
  return (
    <div className='header'>
      <h3 className='heading'>Covid-19 Nigeria</h3>
      <div className='boxes'>
        <div className='box-1'>
          <h3 className='case'>Confirmed Cases</h3>
          <span className='figure'>{totalConfirmedCases}</span>
        </div>
        <div className='box-2'>
          {' '}
          <h3 className='case'>Active Cases</h3>
          <span className='figure'>{totalActiveCases}</span>
        </div>
        <div className='box-3'>
          {' '}
          <h3 className='case'>Discharged Cases</h3>
          <span className='figure'>{discharged}</span>
        </div>
        <div className='box-4'>
          {' '}
          <h3 className='case'>Death</h3>
          <span className='figure'>{death}</span>
        </div>
        <div className='box-5'>
          {' '}
          <h3 className='case'>Samples Tested</h3>
          <span className='figure'>{totalSamplesTested}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
