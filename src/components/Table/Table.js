import { useSelector } from 'react-redux';
import './Table.css';

const Table = () => {
  const { cases } = useSelector((store) => store.cases);
  const { states } = cases.data;

  return (
    <section>
      <div className='tabular'>
        <h3 className='table-heading'>Confirmed Cases by States</h3>
        <div>
          <table>
            <thead>
              <tr>
                <th>States Affected</th>
                <th>No. of Cases on Admission</th>
                <th>No. of Confirmed Cases</th>
                <th>No. of Discharged</th>
                <th>No. of Deaths</th>
              </tr>
            </thead>

            <tbody>
              {states.map((item) => {
                console.log(item);
                const {
                  casesOnAdmission,
                  confirmedCases,
                  death,
                  discharged,
                  state,
                  id,
                } = item;
                return (
                  <tr key={id}>
                    <td>{state}</td>
                    <td>{casesOnAdmission}</td>
                    <td>{confirmedCases}</td>
                    <td>{discharged}</td>
                    <td>{death}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
