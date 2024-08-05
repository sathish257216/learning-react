import { render, screen } from '@testing-library/react';
import Contact from './Contact';


test('Contact component created', () => {
  render(<Contact />);
  const contactText = screen.getByText(/contact us/i);
  expect(contactText).toBeInTheDocument();
});


it('should create button', () => {
    render(<Contact />);
    const emailButton = screen.getByRole("button");
    expect(emailButton).toBeInTheDocument();
  });
  