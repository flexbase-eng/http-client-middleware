import { createEmptyAuthenticationToken } from "../../src/authentication/AuthenticationToken";

test("AuthenticationToken Create empty object", () => {
    const token = createEmptyAuthenticationToken();

    expect(token).not.toBeNull();
});