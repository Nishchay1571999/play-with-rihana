module.export = {
    clearMocks: true,
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNaeMapper: {
        "@code/(.*)": [
            "./src/advanced/(.*)",
            "./src/beginner/(.*)"
        ],
        "@solution/(.*)": [
            "./src/solution/advanced/(.*)",
            "./src/solution/beginner/(.*)"
        ]
    },
    preset: "ts-jest"
}