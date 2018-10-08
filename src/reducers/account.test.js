import account from "./account";

describe("Account reducer", () => {
  it("should return the initial state, empty", () => {
    expect(account(undefined, {})).toEqual([]);
  });

  it("should handle LOGIN_REQUEST", () => {
    expect(
      account([], {
        type: "LOGIN_REQUEST"
      })
    ).toEqual([]);

    expect(
      account([], {
        type: "LOGIN_SUCCESS"
      })
    ).toEqual({});
  });
});
