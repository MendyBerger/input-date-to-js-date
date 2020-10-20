// not happy with the way tests are setup, but I couldn't figure out how to make ts-jest work with es modules, so I just went without ts-jest until they add support for es modules
export default {
	clearMocks: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	rootDir: "./dist"
};
