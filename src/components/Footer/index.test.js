import Footer from "./index";
import { render } from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";

describe("Footer", () => {
  test("should render without crash", async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
  });
});
