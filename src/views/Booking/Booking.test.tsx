// packages
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// components
import Booking from './index';

describe('Booking', () => {
  test('Must render heading', async () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Booking />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('header-heading');

    expect(el).not.toBeNull();
  });

  test('Must render sub-heading', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Booking />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('header-sub-heading');

    expect(el).not.toBeNull();
  });

  test('Must render description', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Booking />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('header-description');

    expect(el).not.toBeNull();
  });
});

describe('Menu', () => {
  test('Must render a field: first name', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Booking />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('form-input-first-name');

    expect(el).not.toBeNull();
  });

  test('Must render a field: last name', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Booking />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('form-input-last-name');

    expect(el).not.toBeNull();
  });

  test('Must render a field: mobile', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Booking />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('form-input-mobile');

    expect(el).not.toBeNull();
  });

  test('Must render a field: guests', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Booking />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('form-input-guests');

    expect(el).not.toBeNull();
  });

  test('Must render a field: date', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Booking />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('form-input-date');

    expect(el).not.toBeNull();
  });

  test('Must render a field: time', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <Booking />
        </HelmetProvider>
      </BrowserRouter>,
    );

    const el = screen.getByTestId('form-input-time');

    expect(el).not.toBeNull();
  });
});
