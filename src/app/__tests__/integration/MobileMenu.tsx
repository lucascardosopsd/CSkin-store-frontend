import MobileMenu from "@/app/components/MobileMenu";
import { render, screen } from "@testing-library/react";

jest.mock("../../components/forms/filterForm", () => () => <div />);

jest.mock("@chakra-ui/react", () => {
  const original = jest.requireActual("@chakra-ui/react");

  return {
    _esmodule: true,
    ...original,
    useColorMode: jest.fn().mockImplementation(() => ({
      mode: "dark",
    })),
  };
});

describe("Mobile menu render without filter form", () => {
  it("Should be rendered", () => {
    render(<MobileMenu />);

    expect(screen.getByRole("mobileMenu")).toBeInTheDocument();
  });
});
