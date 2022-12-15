import { render, screen } from "@testing-library/react";
import GeneralFooter from "dh-marvel/components/layouts/footer/general-footer.component";

describe("GeneralFooter", () => {
  describe("when rendering default layout", () => {
    it("should render the powered by DH text", () => {
      render(<GeneralFooter />);
      const poweredByDH = screen.getByText("Powered by DH");
      expect(poweredByDH).toBeInTheDocument();
    });
    it("should render the logo", () => {
      render(<GeneralFooter />);
      const logo = screen.getByAltText("Digital House Logo");
      expect(logo).toBeInTheDocument();
    });
  });
});
