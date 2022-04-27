import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render the header', async () => {
    render(<App />);

    const heading = await screen.findByText('Home of Futurama!!!');
    expect(heading).toBeInTheDocument();
  });
});
