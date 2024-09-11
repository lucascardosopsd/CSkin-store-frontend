import MobileMenu from "@/app/components/MobileMenu";
import Navbar from "@/app/components/Navbar";
import { Providers } from "@/app/components/Providers";
import FilterForm from "@/app/components/forms/FilterForm";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";

const resizeWindow = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

// Mocks

jest.mock("next/navigation", () => {
  const original = jest.requireActual("next/navigation");

  return {
    _esmodule: true,
    ...original,
    useRouter: jest.fn().mockReturnValue({
      replace: jest.fn(),
    }),
    useSearchParams: jest.fn(() => new URLSearchParams()),
    usePathname: () => "/",
    pathname: "/test",
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

  it("Shoud be order data putting query in url after apply in filter form", async () => {
    const { replace } = useRouter();

    render(<FilterForm />, { wrapper: Providers });

    // Fill name
    const nameInput = screen.getByRole("inputName");
    fireEvent.change(nameInput, { target: { value: "Uivo" } });

    // Get order select
    const orderSelect = screen.getByRole("orderSelect");
    fireEvent.change(orderSelect, { target: { value: "lowestPrice" } });

    // Click apply
    const applyFilter = screen.getByRole("applyFilter");
    fireEvent.click(applyFilter);

    await waitFor(() => {
      expect(replace).toHaveBeenCalled();
    });
  });
});
