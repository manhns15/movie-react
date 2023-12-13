import { Provider } from "react-redux";
import store from "../../store/store";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import HomeMovie from "../../components/home/HomeMovie";
describe("Header Component", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <HomeMovie />
          </MemoryRouter>
        </Provider>
      );
    });
    test("render Header", () => {
      const layoutElement = screen.getByText("Top Rated Movies");
      expect(layoutElement).toBeTruthy();
    });
  });

