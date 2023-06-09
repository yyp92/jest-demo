module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',

    // setupFiles 是 Jest 的一种配置选项，用于在运行测试之前执行一些全局的初始化操作。可以使用该选项配置一个 JavaScript 文件列表，Jest会在执行测试之前自动地将这些文件中的代码插入到测试环境中，从而保证初始化操作被正确执行。
    setupFiles: ['./tests/setup.js'],

    // setupFilesAfterEnv: ['./tests/setup-tests.js'],
    // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    // setupFilesAfterEnv: [
    //     "<rootDir>/setupEnzyme.ts" // 文件路径根据你的项目而定
    // ],

    // 匹配的测试文件
    testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    
    // 在每次运行测试时清除模块缓存
    clearMocks: true,
    
    // 是否收集测试覆盖率信息
    collectCoverage: true,
    // 指定测试覆盖率处理程序
    // coverageProvider: 'v8',
    // 处理测试覆盖率的目录
    coverageDirectory: 'coverage',
    
    // 哪些文件需要被忽略
    modulePathIgnorePatterns: [
        '<rootDir>/build/', 
        '<rootDir>/node_modules/',
        '<rootDir>/mock/'
    ],
    
    // 超时时间
    testTimeout: 10000,

    // 忽略的文件
    // transformIgnorePatterns: ['/node_modules/'],

    // 指定测试报告生成器
    /**
     * Jest-html-reporters 是一个 Jest 的测试报告生成工具，可以生成美观易读的 HTML 格式测试报告。
     * 
     * publicPath: 指定报告的公共路径，这里将报告保存到了 ./reports/test-report.html 文件中；
     * pageTitle: 指定报告的标题；
     * outputPath: 指定报告的输出路径；
     * includeFailureMsg: 是否在报告中包含错误信息；
     * sort: 报告中测试用例排序方式，默认为 durationDesc；
     * pageSize: 报告中每页显示的测试用例数量，缺省值为 20；
     * maxDepth: 报告中最多展示的测试套件层数，缺省值为 99。
     */
    reporters: [
        "default",
        ["jest-html-reporters", {
            publicPath: "./reports/test-report.html",
            pageTitle: "Test Report",
            outputPath: "./reports/test-report.html",
            includeFailureMsg: true,
            sort: "titleAsc",
            pageSize: 10,
            maxDepth: 99
        }]
    ],
};
  