module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',

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
    modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
    
    // 超时时间
    testTimeout: 10000,

    // 忽略的文件
    transformIgnorePatterns: ['/node_modules/'],

    // 指定测试报告生成器
    reporters: ['default', 'jest-html-reporter'],
};
  