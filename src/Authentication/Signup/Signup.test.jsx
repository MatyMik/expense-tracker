import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {Signup} from './';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'

test('renders Sign up title', () => {
  render(
    <BrowserRouter>
  <Signup />
  </BrowserRouter>);
  const signUpTitle = screen.getByText('Sign up');
  expect(signUpTitle).toBeInTheDocument();
});


describe('Subtitle test', () => {
  test('renders Sign up subtitle text', () => {
    render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>);
    const signUpSubitleText = screen.getByText('Already have an account? Then please');
    expect(signUpSubitleText).toBeInTheDocument();
  });
  test('renders a link to sign in page', () => {
    render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>);
    const signInLink = screen.getByRole('link', {name: 'Sign in'});
    expect(signInLink).toBeInTheDocument();
  });
  it('redirects to the sign in page when the Sign in link is clicked', () => {
    expect(0).toBe(1) 
  });
  test('renders an input field with the label text: e-mail address', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>);
      const emailAddressInput = screen.getByLabelText('E-mail address');
      expect(emailAddressInput).toBeInTheDocument();
  });
  test('can type valid email into email address input', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    const emailAddressInput = screen.getByLabelText('E-mail address');
    userEvent.type(emailAddressInput, 'test@test.hu');
    expect(emailAddressInput.value).toBe('test@test.hu'); 
  })
})