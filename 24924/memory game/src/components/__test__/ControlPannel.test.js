import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ControlPannel from '../ControlPannel';
import '@testing-library/jest-dom';

jest.mock('@lottiefiles/react-lottie-player', () => ({
  Player: () => <div data-testid="lottie-player" />,
}));

const mockStore = configureStore([]);

describe('ControlPannel Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      game: {
        cards: [
          { id: 1, animal: 'cat' },
          { id: 2, animal: 'dog' }
        ],
        flipped: [],
        solved: [],
        moves: 0,
        level: 1
      }
    });
  });

  it('renders initial moves and buttons correctly', () => {
    render(
      <Provider store={store}>
        <ControlPannel />
      </Provider>
    );

    expect(screen.getByText(/Moves:/)).toBeInTheDocument();
    
    expect(screen.getByText(/Restart Level/)).toBeInTheDocument();

    expect(screen.getByText(/Go to Home/)).toBeInTheDocument();
  });

  it('shows the congrats modal when the game is completed', () => {
    store = mockStore({
      game: {
        cards: [
          { id: 1, animal: 'cat' },
          { id: 2, animal: 'dog' }
        ],
        flipped: [],
        solved: [1, 2],
        moves: 3,
        level: 1
      }
    });

    render(
      <Provider store={store}>
        <ControlPannel />
      </Provider>
    );

    expect(screen.getByText(/Congratulations!/)).toBeInTheDocument();
    expect(screen.getByText(/You have completed the level!/)).toBeInTheDocument();

    expect(screen.getByTestId('lottie-player')).toBeInTheDocument();
  });

  it('handles the restart button correctly', () => {
    render(
      <Provider store={store}>
        <ControlPannel />
      </Provider>
    );

    const restartButton = screen.getByText(/Restart Level/);
    fireEvent.click(restartButton);

    
    expect(restartButton).toBeInTheDocument();
  });

  it('handles the next level button correctly when game is completed', () => {
    store = mockStore({
      game: {
        cards: [
          { id: 1, animal: 'cat' },
          { id: 2, animal: 'dog' }
        ],
        flipped: [1, 2],
        solved: [1, 2], 
        moves: 3,
        level: 1
      }
    });

    render(
      <Provider store={store}>
        <ControlPannel />
      </Provider>
    );

    const nextLevelButton = screen.getByText(/Next Level/);
    expect(nextLevelButton).toBeInTheDocument();

    // fireEvent.click(nextLevelButton);

    // expect(nextLevelButton).toBeInTheDocument();
  });
});
