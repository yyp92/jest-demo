import {
    render,

    // 用于获取已渲染 DOM 元素的引用
    screen,

    // 它通常用于等待异步组件状态的变化，并在状态变化后进行断言。
    waitFor,
    fireEvent,
} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import TodoHeader from "../TodoHeader";

describe('TodoHeader 组件测试', () => {
    test(`TodoHeader render`, () => {
        const { getByTestId } = render(<TodoHeader title="标题" />);
        const element = getByTestId("todo-header-title");
        expect(element).toBeInTheDocument;
    });

    test(`正确渲染显示图标的情况`, async () => {
        const iconUrl = "http://www.abc.com/test.png";
        const { container } = render(<TodoHeader title="标题" iconUrl={iconUrl} />);

        await waitFor(() => {
            const imgElement = container.querySelector("img");
            expect(imgElement).not.toBeNull();
            expect(imgElement).toHaveProperty("src", iconUrl);
        });
    });

    test(`正确渲染children的情况`, async () => {
        const id = "childrenId";
        const text = "这是一个文案";

        render(
            <TodoHeader title="标题">
                <span data-testid={id}>{text}</span>
            </TodoHeader>
        );

        const element = screen.getByTestId(id);
        expect(element.textContent).toBe(text);
    });

    test(`正确响应onClickTitle的事件`, () => {
        const mockClickFn = jest.fn();
        const title = "标题";

        const { getByText } = render(
            <TodoHeader title={title} onClickTitle={mockClickFn} />
        );

        fireEvent.click(getByText(title));
        expect(mockClickFn).toBeCalled();
        expect(mockClickFn).toBeCalledWith(title);
    });

    test(`正确处理Input change 事件`, async () => {
        const title = "标题";
        const newTitle = "新的标题";
        const { container } = render(<TodoHeader title={title} />);

        const inputElement = container.querySelector("input");
        expect(inputElement).not.toBeNull();

        await waitFor(async () => {
            fireEvent.change(inputElement!, { target: { value: newTitle } });
        });

        const element = screen.queryByText(newTitle);
        expect(element).not.toBeNull();
    });
})