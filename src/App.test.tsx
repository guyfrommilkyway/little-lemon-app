// packages
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// components
import App from './App';

describe('Must render Layout component', () => {
  test('Must render heading', async () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('layout');

    expect(el).not.toBeNull();
  });
});
