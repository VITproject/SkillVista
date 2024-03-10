import { render, screen } from '@testing-library/react';
import FacultyDashboard from './FacultyDashboard';

test('renders learn react link', () => {
  render(<FacultyDashboard/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
