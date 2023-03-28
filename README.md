# jest demo

Jest 是一个令人愉快的 JavaScript 测试框架，专注于 简洁明快。

这些项目都在使用 Jest：Babel、 TypeScript、 Node、 React、 Angular、 Vue 等等！


## 插件
- [jest-puppeteer](https://m.w3cschool.cn/jest_cn/jest_puppeteer.html)

### ts/tsx文件
```bash
# npm/yarn/pnpm
npm install --save-dev jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom
```
- @types/jest 是 TypeScript 下的 Jest 类型定义文件。
- ts-jest 是用于解析和编译 TypeScript 文件的 Jest 插件。
- @testing-library/react 和 @testing-library/jest-dom 是用于编写 React 测试用例的工具库。


## 测试指标
jest 是一个流行的 JavaScript 测试框架，在测试过程中，它会生成一份测试覆盖率报告，其中包含了四个指标：% Stmts、% Branch、% Funcs 和 % Lines，分别表示：

- Stmts: 代码语句覆盖率，即被测试的文件中有多少代码语句被执行了；
- Branch: 分支覆盖率，即被测试的文件中有多少个代码分支被执行了。分支是指 if/else、switch/case 和条件表达式等；
- Funcs: 函数覆盖率，即被测试的文件中有多少个函数被执行了；
- Lines: 行覆盖率，即被测试的文件中有多少行代码被执行了。

这是 Jest 测试运行时的一段输出结果，其中包含了四个指标：Test Suites、Tests、Snapshots 和 Time。

- Test Suites: 4 passed, 4 total: 表示总共运行了 4 个测试套件，其中有 4 个测试套件全部通过了测试。
- Tests: 7 passed, 7 total: 表示总共运行了 7 个测试用例，其中有 7 个测试用例全部通过了测试。
- Snapshots: 1 passed, 1 total: 表示使用 Jest 的快照测试功能完成了 1 个测试，且测试结果为通过。
- Time:: 表示运行测试所花费的时间。时间格式可能是几秒（s）、几毫秒（ms）等。

一般来说，这些指标可以用来评估测试的质量和稳定性。如果测试通过率较高，则说明代码被很好地覆盖了，可以更好地保障代码的可靠性和健壮性；而如果测试失败较多，则说明代码可能存在问题，需要进一步排查和修复。



## 参考资料
- [官网](https://www.jestjs.cn/docs/getting-started)
- [jest 配置文件解读](https://juejin.cn/post/7003595612977365028)
- [jest 配置文件解读1](https://zhuanlan.zhihu.com/p/535048414)