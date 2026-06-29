import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the new portfolio hero', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /i build small web products with clear purpose/i })
  ).toBeInTheDocument();
});
