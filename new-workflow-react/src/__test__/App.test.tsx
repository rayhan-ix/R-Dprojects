import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('should render app component', () => {
  it('renders app component with change language', async () => {
    render(<App />);
    const testId = await waitFor(() => screen.getByTestId('change-language'));
    expect(testId).toBeInTheDocument();
  });
});
