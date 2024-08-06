import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import resData from './mock/mockResCardData.json';
import ResturantCardComponent, { withHighlyRatedResturantCardComponent } from "./ResturantCard";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

test('Resturant card component created', () => {
    render(
      <BrowserRouter>
      <Provider store={store}>
        <ResturantCardComponent resData={resData}/>
      </Provider>
      </BrowserRouter>
    );

    const nameText = screen.getByText("Daily Kitchen - Homely Meals");
    expect(nameText).toBeInTheDocument();
});


test('Higher order Resturant component created', () => {
  const HighlyRatedResturant = withHighlyRatedResturantCardComponent(ResturantCardComponent); 

  render(
    <BrowserRouter>
    <Provider store={store}>
      <HighlyRatedResturant resData={resData} />
    </Provider>
    </BrowserRouter>
  );

  const nameText = screen.getByText("Highly Rated");
  expect(nameText).toBeInTheDocument();
});
