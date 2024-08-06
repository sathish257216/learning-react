import { fireEvent, render, screen } from '@testing-library/react';
import HeaderComponent from './Header';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";


test('Header component created', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name: "Login Default user"});
    expect(loginButton).toBeInTheDocument();
});


test('cart item 0', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    );
    const cartText = screen.getByText("Cart - 0");
    expect(cartText).toBeInTheDocument();
});

test('Logout on click', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name: "Login Default user"});   
    fireEvent.click(loginButton);
    // Assertion
    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
});

