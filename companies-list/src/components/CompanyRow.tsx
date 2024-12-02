import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSelectCompany, updateCompany } from '../Redux/appSlice';

interface CompanyRowProps {
  company: {
    id: number;
    name: string;
    address: string;
    selected: boolean;
  };
}

const CompanyRow: React.FC<CompanyRowProps> = ({ company }) => {
  const dispatch = useDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCompany({ ...company, name: e.target.value }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCompany({ ...company, address: e.target.value }));
  };

  return (
    <tr style={{ backgroundColor: company.selected ? '#e0e0e0' : 'white' }}>
      <td className="checkbox-cell" >
        <input
          type="checkbox"
          checked={company.selected}
          onChange={() => dispatch(toggleSelectCompany(company.id))}
        />
      </td>
      <td>
        <input type="text" value={company.name} onChange={handleNameChange} />
      </td>
      <td>
        <input type="text" value={company.address} onChange={handleAddressChange} />
      </td>
    </tr>
  );
};

export default CompanyRow;
