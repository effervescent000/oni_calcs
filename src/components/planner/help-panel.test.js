import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HelpPanel from "./help-panel";

describe("Help panel rendering tests", () => {
    beforeEach(() => {
        render(<HelpPanel />);
    });
    test("Help panel starts open", () => {
        expect(screen.getByText(/To begin/)).toBeInTheDocument();
    });
    test("Close button closes help panel", async () => {
        const closeButton = screen.getByText("x");
        expect(closeButton).toBeInTheDocument();
        userEvent.click(closeButton);
        expect(screen.queryByText(/To begin/)).toBeNull();
        expect(screen.getByText("?")).toBeInTheDocument();
    });
});
