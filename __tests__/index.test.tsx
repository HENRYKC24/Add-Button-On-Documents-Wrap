import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders table heading "Documents"', () => {
    render(<Home />);

    const tableHeading = screen.getByText('Documents');

    expect(tableHeading).toBeInTheDocument();
  });
});

describe('Home', () => {
  it('renders table heading "Salary"', () => {
    render(<Home />);

    const tableHeading = screen.getByText('Salary');

    expect(tableHeading).toBeInTheDocument();
  });
});
