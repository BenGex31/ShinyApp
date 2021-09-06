import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";
import Card from "./index";

describe("Card", () => {
  test("should render title and image", async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    );
    const cardPicture = screen.getByRole("img");
    expect(cardPicture.src).toBe("http://localhost/myPicture.png");
    const cardTitle = screen.getByText(/Harry/i);
    expect(cardTitle.textContent).toBe(" Harry Potter ");
  });
  test("should add ⭐️ around title", async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    );
    const cardTitle = screen.getByText(/Harry/i);
    const parentNode = cardTitle.closest("div");
    fireEvent.click(parentNode);
    expect(cardTitle.textContent).toBe("⭐️ Harry Potter ⭐️");
  });
});
