import { Provider } from "react-redux";
import store from "../../store/store";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import MovieDetail from "../../components/movie-detail/MovieDetail";
describe("Header Component", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <MovieDetail />
          </MemoryRouter>
        </Provider>
      );
    });
    test("render Header", () => {
      const layoutElement = screen.getByText("Top rated");
      expect(layoutElement).toBeTruthy();
    });
  });

