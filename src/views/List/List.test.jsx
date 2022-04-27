import { render, screen, waitFor } from '@testing-library/react';
import QuoteList from './List';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('QuoteList', () => {
  it('renders a list of quotes to the screen that are filterable', async () => {
    render(
      <MemoryRouter>
        <QuoteList />
      </MemoryRouter>
    );

    screen.getByText(/loading/i);

    screen.debug();

    await screen.findByText('grim for a day');

    const search = screen.getByPlaceholderText('Search');
    userEvent.type(search, 'grim');

    return waitFor(() => {
      const result = screen.getByRole('heading', { name: /bender/i });
      expect(result.length).toEqual(1);
      expect(result[0].textContent).toEqual('Bender');
    });
  });
});
