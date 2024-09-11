import MobileMenu from "@/app/components/MobileMenu";
import Navbar from "@/app/components/Navbar";
import { Providers } from "@/app/components/Providers";
import { fireEvent, render, screen } from "@testing-library/react";

const resizeWindow = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

jest.mock("next/navigation", () => {
  const original = jest.requireActual("next/navigation");

  return {
    _esmodule: true,
    ...original,
    useRouter: jest.fn().mockImplementation(() => ({
      replace: jest.fn((url) => null),
    })),
    useSearchParams: jest.fn(() => ""),
    usePathname: () => "/",
  };
});

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

describe("Navbar", () => {
  it("Shoud be render navbar with mobile menu", () => {
    render(<Navbar />, { wrapper: Providers });

    expect(screen.getByText("CSkin")).toBeInTheDocument();
  });

  it("Shoud be render mobile menu with filters form ", async () => {
    resizeWindow(300);

    const wrapper = render(<MobileMenu />, { wrapper: Providers });

    const modal = await screen.findByRole("modal", { hidden: true });

    expect(getComputedStyle(modal).visibility).toBe("hidden");

    const trigger = await wrapper.findByRole("mobileMenuTrigger");

    fireEvent.click(trigger);

    expect(await screen.findByRole("modal")).toBeInTheDocument();
  });
});
