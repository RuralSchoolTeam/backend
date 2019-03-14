const request = require("supertest");

const server = require("../api/server.js");

describe("issuesRouter", () => {
  it("should set up a testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("should return a 200 status code", async () => {
      const res = await request(server).get("/api/issues");
      expect(res.status).toBe(200);
    });
  });
});
