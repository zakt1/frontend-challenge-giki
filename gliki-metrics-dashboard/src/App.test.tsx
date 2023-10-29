import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { UserFootprintCloud } from './pages/UserFootprintCloud'; // adjust the import path if necessary
import { UserTargetMetrics } from './pages/UserTargetMetrics';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Your footprint/i);
  expect(linkElement).toBeInTheDocument();
});


describe('UserFootprintCloud component tests', () => {
  test('renders with given carbon footprint, and renders button', () => {
    render(<UserFootprintCloud currentFootprint={7565} />);

  
    const footprintElement = screen.getByText('7,565');
    expect(footprintElement).toBeInTheDocument();

    const takeStepElement =screen.getByRole('button', {name: /Take a step/i}) 
    expect(takeStepElement).toBeInTheDocument()
  });

});

describe('UserTargetMetrics component', () => {
  test('renders with given targets', () => {
    const props = {
      endOfYrTarget: 5856,
      targetYear: 2030,
      longTermTarget: 2500,
      currentFootprint: 7565,
    };
    render(<UserTargetMetrics {...props} />);

    const targetElement = screen.getByText('5,856');
    const longTermTargetElement = screen.getByText(`Your ${props.targetYear} target is ${props.longTermTarget.toLocaleString()} kg`);
    expect(targetElement).toBeInTheDocument();
    expect(longTermTargetElement).toBeInTheDocument();
  });

});
