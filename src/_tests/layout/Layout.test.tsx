import { Provider } from "react-redux";
import store from "../../store/store";
import { MemoryRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { render, screen } from '@testing-library/react';
describe("Header Component", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Layout />
          </MemoryRouter>
        </Provider>
      );
    });
    test("render Header", () => {
      const layoutElement = screen.getByText("Downloaded");
      expect(layoutElement).toBeTruthy();
    });
  });

