import { render, screen, waitFor } from '@testing-library/react';
import QuoteList from './List';
import Search from '../../components/Search';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('QuoteList', () => {
  it('renders a list of quotes to the screen that are filterable', async () => {
    render(
      <MemoryRouter>
        <QuoteList />
        <Search />
      </MemoryRouter>
    );

    screen.getByText(/loading/i);

    const name = await screen.findByText('Dr Zoidberg');
    expect(name).toBeInTheDocument();

    const search = screen.queryAllByText('Search');
    userEvent.type(search, 'antenna');

    return waitFor(() => {
      const result = screen.getByRole('heading', { name: /url/i });
      // expect(result.length).toEqual(1);
      // expect(result[0].textContent).toEqual('URL');
      screen.debug();
    });
  });
});
