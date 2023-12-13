import { Provider } from "react-redux";
import store from "../../store/store";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import Payment from "../../components/payment/Payment";
describe("Header Component", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Payment />
          </MemoryRouter>
        </Provider>
      );
    });
    test("render Header", () => {
      const layoutElement = screen.getByText("Payment methods");
      expect(layoutElement).toBeTruthy();
    });
  });

