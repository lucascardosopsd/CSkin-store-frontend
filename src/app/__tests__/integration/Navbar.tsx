import Navbar from "@/app/components/Navbar";
import { render, screen } from "@testing-library/react";

jest.mock("../../components/MobileMenu", () => () => <div />);

describe("Navbar", () => {
  it("Shoud render navbar withou mobile menu", () => {
    render(<Navbar />);

    expect(screen.getByText("CSkin")).toBeInTheDocument();
  });
});
