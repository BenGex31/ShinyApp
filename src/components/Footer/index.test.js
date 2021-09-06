import Footer from "./index";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";

describe("Footer", () => {
  test("should render without crash", async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
  });
  test("should change theme", async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    const nightModeButton = screen.getByRole("button");
    expect(nightModeButton.textContent).toBe("Changer de mode : ☀️");
    fireEvent.click(nightModeButton);
    expect(nightModeButton.textContent).toBe("Changer de mode : 🌙");
  });
});
