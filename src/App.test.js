import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders main title', () => {
    const mainTitle = screen.getByText(/Deploy to AWS ECS/i);
    expect(mainTitle).toBeInTheDocument();
  });

  test('renders group subtitle', () => {
    const subtitle = screen.getByText(/Group 2/i);
    expect(subtitle).toBeInTheDocument();
  });

  test("renders Bruno's name", () => {
    const brunoName = screen.getByText(/Bruno Accorsi Bergoli/i);
    expect(brunoName).toBeInTheDocument();
  });

  test("renders Gabriel's name", () => {
    const gabrielName = screen.getByText(/Gabriel Constantino Zacharias/i);
    expect(gabrielName).toBeInTheDocument();
  });

  test("renders Matheus's name", () => {
    const matheusName = screen.getByText(/Matheus De Morais Neves/i);
    expect(matheusName).toBeInTheDocument();
  });
});
