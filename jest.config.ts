module.exports = {
  roots: ["<rootDir>"],

  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],

  coverageDirectory: "coverage",

  testEnvironment: "node",

  transform: {
    ".+\\.ts$": "ts-jest",
  },

  moduleNameMapper: {
    "@controllers/(.*)$": "<rootDir>/src/controllers/$1",

    "@models/(.*)$": "<rootDir>/src/models/$1",

    "@utils/(.*)$": "<rootDir>/src/utils/$1",

    "@config/(.*)$": "<rootDir>/src/config/$1",
  },
}
