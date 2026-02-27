import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './components/Header';
import { LanguageProvider } from './LanguageContext';

test('renders NovaLend navigation brand', () => {
  render(
    <MemoryRouter>
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    </MemoryRouter>
  );

  expect(screen.getByRole('link', { name: /NovaLend/i })).toBeInTheDocument();
});
