import ItemList from "./ItemList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import restaurantMenu from './mockData.json';
import { Provider } from "react-redux";
import store from "../../store/store";

test('ItemList component created', () => {
    render(
        <Provider store={store}>
            <ItemList restaurantMenu={restaurantMenu}/>
        </Provider>
    );

    const nameText = screen.getByText("Chicken Kebabs Platter- (Serves 2)");
    expect(nameText).toBeInTheDocument();
});
