import React from 'react';
import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentDashboard from './StudentDashboard';

test('renders learn react link', () => {
  render(<StudentDashboard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
