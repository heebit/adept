import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../Redux/appSlice';

const AddCompanyForm: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  const handleAddCompany = () => {
    if (name.trim() && address.trim()) {
      dispatch(
        addCompany({
          id: Date.now(), // Уникальный идентификатор
          name,
          address,
          selected: false,
        })
      );
      setName('');
      setAddress('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Добавить компанию</h3>
      <input
        type="text"
        placeholder="Название компании"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <input
        type="text"
        placeholder="Адрес компании"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button onClick={handleAddCompany} style={{ padding: '5px 10px' }}>
        Добавить
      </button>
    </div>
  );
};

export default AddCompanyForm;
