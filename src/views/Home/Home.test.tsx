// packages
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// components
import Home from './index';

describe('About', () => {
  test('Must render heading', async () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Home />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('about-heading');

    expect(el).not.toBeNull();
  });

  test('Must render sub-heading', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Home />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('about-sub-heading');

    expect(el).not.toBeNull();
  });

  test('Must render description', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Home />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('about-description');

    expect(el).not.toBeNull();
  });

  test('Must render image', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Home />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('about-image');

    expect(el).not.toBeNull();
  });
});

describe('Menu', () => {
  test('Must render heading', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Home />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('menu-heading');

    expect(el).not.toBeNull();
  });

  test('Must render menu button', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Home />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('menu-button');

    expect(el).not.toBeNull();
  });

  test('Must render menu items', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Home />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('menu-items');

    expect(el).not.toBeNull();
  });
});
