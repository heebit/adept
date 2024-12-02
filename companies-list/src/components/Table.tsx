import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { toggleSelectAll, deleteSelectedCompanies } from '../Redux/appSlice';
import CompanyRow from './CompanyRow';

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state: RootState) => state.companies.companies);
  const selectedCount = companies.filter(company => company.selected).length;

  return (
    <div>
      <button onClick={() => dispatch(deleteSelectedCompanies())}>Удалить выбранные</button>
      <table>
        <thead>
          <tr>
            <th>
              <div className='chooseAll'>
                <input
                  type="checkbox"
                  checked={selectedCount === companies.length}
                  onChange={() => dispatch(toggleSelectAll())}
                />
                <span>Выбрать все</span>
              </div>
            </th>
            <th>Название компании</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <CompanyRow key={company.id} company={company} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
