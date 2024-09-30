import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import GameBoard from '../GameBoard';

jest.mock('../card/Card', () => {
  return function MockCard({ id }) {
    return <div data-testid={`card-${id}`} />;
  };
});

describe('GameBoard', () => {
  const mockStore = configureStore([]);
  const initialState = {
    game: {
      cards: [
        { id: 1, animal: 'cat' },
        { id: 2, animal: 'dog' },
        { id: 3, animal: 'cat' },
        { id: 4, animal: 'dog' },
      ],
      flipped: [],
      solved: [],
      moves: 0,
    },
  };

  it('renders the correct number of Card components', () => {
    const store = mockStore(initialState);
    const { getAllByTestId } = render(
      <Provider store={store}>
        <GameBoard />
      </Provider>
    );

    const cardElements = getAllByTestId(/^card-/);
    expect(cardElements).toHaveLength(4);
  });
});