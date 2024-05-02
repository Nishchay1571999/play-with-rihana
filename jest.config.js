module.export = {
    clearMocks: true,
    moduleNaeMapper: {
        "@code/(.*)": [
            "<rootDir>/src/advanced/(.*)",
            "<rootDir>/src/beginner/(.*)"
        ]
    },
    preset: "ts-jest"
}