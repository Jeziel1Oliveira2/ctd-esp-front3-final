import { generateAuthenticationString } from "dh-marvel/services/marvel/marvel-auth.service";

describe("MarvelAuthService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2020, 3, 1));
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  describe("when generating an authentication string", () => {
    it("should return a valid query string", async () => {
      const authenticationString = generateAuthenticationString();
      expect(authenticationString).toBe(
        "ts=1585699200000&apikey=PUBLIC_KEY&hash=0dc9b2eecbbce50d88a572af426db3da"
      );
    });
  });
});