import Home from "@/app/(pages)/page";
import { Providers } from "@/app/components/Providers";
import api from "@/app/lib/axios";
import { render, screen } from "@testing-library/react";

jest.mock("../../lib/axios");
jest.mock("../../components/misc/Paginate", () => () => <div />);

jest.mock("../../lib/axios");

describe("Home component", () => {
  it("Should render home page with skins grid", async () => {
    (api.get as jest.Mock).mockResolvedValueOnce({
      data: {
        skins: [
          {
            get: jest.fn().mockResolvedValue({
              skins: [
                {
                  "id": "66e0a7239503ea3386e3ec57",
                  "name": "Degradê",
                  "image": "https://i.imgur.com/pqDs5Bm.png",
                  "category": "pistola",
                  "float": 0.01,
                  "price": 9500,
                  "createdAt": "2024-09-10T18:29:24.831Z",
                  "updatedAt": "2024-09-10T18:29:24.831Z",
                },
              ],
              pages: 1,
            }),
          },
        ],
      },
    });

    // Render component
    render(await Home({ searchParams: {} }), { wrapper: Providers });

    // check main component is in the document
    expect(screen.getByTestId("mainContainer")).toBeInTheDocument();
  });
});
