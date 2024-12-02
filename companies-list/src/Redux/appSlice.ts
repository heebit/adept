import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Company {
  id: number;
  name: string;
  address: string;
  selected: boolean;
}

interface CompaniesState {
  companies: Company[];
}

const initialState: CompaniesState = {
  companies: Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Компания ${index + 1}`,
    address: `Адрес ${index + 1}`,
    selected: false,
  })),
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    toggleSelectAll: (state) => {
      const areAllSelected = state.companies.every(company => company.selected);
      state.companies.forEach(company => company.selected = !areAllSelected);
    },
    toggleSelectCompany: (state, action: PayloadAction<number>) => {
      const company = state.companies.find(c => c.id === action.payload);
      if (company) {
        company.selected = !company.selected;
      }
    },
    updateCompany: (state, action: PayloadAction<Company>) => {
      const index = state.companies.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.companies[index] = action.payload;
      }
    },
    deleteSelectedCompanies: (state) => {
      state.companies = state.companies.filter(company => !company.selected);
    },
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies.push(action.payload);
    },
  },
});

export const { toggleSelectAll, toggleSelectCompany, updateCompany, deleteSelectedCompanies, addCompany } = companiesSlice.actions;
export default companiesSlice.reducer;
