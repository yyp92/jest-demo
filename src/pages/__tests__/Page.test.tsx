import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Page from '../Page';

/**
 * describe 和 it 都是 Jest 测试框架中的方法，用于编写和组织测试用例。
 * describe 方法用于分组测试用例，可以将多个相关的 it 测试语句放在同一个 describe 块中。 例如，在一个组件测试文件中我们可能有多个 describe 块，每个 describe 块表示该块中测试的功能或模块。
 */
/**
 * 在 Jest 测试框架中，test 和 it 两个函数的作用是相同的，都用于定义一个测试用例。它们可以互换使用，没有本质上的区别。
 */
describe('Page Component', () => {
  /**
   * expect 是 Jest 测试框架中的一个函数，用于编写和运行测试断言。
   * 在使用 Jest 进行单元测试时，我们可以使用 expect 函数来编写各种测试断言。通常情况下，expect 函数都会与匹配器（matcher）函数一起使用，用于判断某个值是否满足特定条件。
   * 除了 toEqual，还有其它很多Jest提供的匹配器函数，例如 .toBe、.not.toBe、.toHaveLength 等等，这些匹配器函数可以帮助我们更精确的检测我们的测试结果是否符合预期。具体使用方法可以参考 Jest 官方文档。
   * 需要注意的是，在测试中，expect 函数应该始终保证只有一个断言。如果一个测试包含多个断言，则难以确定哪个断言造成了测试失败。为了避免这种情况，每个测试应该尽量简洁和清晰，并尽可能地保证只包含一个断言。
   */

  // 使用了 toMatchSnapshot() 函数来创建页面组件的快照，并将其与之前保存的快照进行比较。如果两者不匹配，测试将会失败。
  it('renders correctly', () => {
    const { container } = render(<Page title="My Page" />);
    expect(container).toMatchSnapshot();
  });

  /**
   * 测试了组件能否正确地显示输入的 title 属性
   * 
   * toBeInTheDocument 是 Jest 提供的一个用于验证 DOM 元素是否存在于页面上的函数，通常与 jest-dom 库一起使用。
   * 因此，为了能够正常使用 toBeInTheDocument 函数，需要确保在测试文件的顶部引入了 jest-dom。
   * import '@testing-library/jest-dom/extend-expect';
   * 这段代码将会自动加载 jest-dom 库提供的所有验证函数，包括 toBeInTheDocument 在内。
   * 
   */
  it('displays the correct title', () => {
    render(<Page title="My Page" />);

    /**
     * screen
     * @testing-library/react 中的 screen 是一个全局对象，提供了许多用于查询 DOM 元素的函数。它是建立在 DOM Testing Library 之上的，遵循了相同的设计原则：模拟真实用户行为来测试应用。
     * 使用 screen 对象，你可以进行以下操作：
     *  查询元素：可以使用 screen.getByLabelText、screen.getByRole、screen.getByText 等一系列函数根据不同的查询方式查找 DOM 元素。
     *  断言元素：可以使用 screen.getByText、screen.getByRole 等函数检查某个元素是否存在于 DOM 中，并根据需要进行断言。
     *  模拟用户交互：可以使用 screen.click、screen.type 等函数模拟用户与元素的交互。
     *  包含多个查询结果：如果查询到的元素有多个匹配项，可以使用 screen.getAllBy* 或 screen.queryAllBy* 函数获取所有匹配项或返回查询结果 null。
     *  焦点管理：可以使用 screen.debug 函数在控制台中打印出当前元素的焦点信息，这对于调试焦点相关的问题非常有用。
     */
    /**
     * toBeInTheDocument
     * toBeInTheDocument 是一个 Jest 匹配器，由 @testing-library/jest-dom 提供。它的作用是检查元素是否存在于 HTML 文档中。
     * 通常情况下，我们可以使用类似于 expect(element).not.toBeNull() 或者 expect(element).toBeDefined() 的语句来判断元素是否存在。但是这些语句可能会给出一些错误的结果，因为 null 或 undefined 也有可能被认为是“存在”的元素。
     * 相比之下，toBeInTheDocument 则更为严格。当元素确实存在于文档中时，它会返回 true；如果不存在，它将抛出一个错误并且测试不通过。
     */
    expect(screen.getByText('My Page')).toBeInTheDocument();
  });
});