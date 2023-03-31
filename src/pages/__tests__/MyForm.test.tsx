import {
    render,

    // 用于获取已渲染 DOM 元素的引用
    screen,

    // 它通常用于等待异步组件状态的变化，并在状态变化后进行断言。
    waitFor,
    fireEvent,
} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import MyForm from "../MyForm";
import {waitFakeTimer} from '../../utils/util'

/**
 * @jest-environment jsdom-global
 */

beforeEach(() => {
    document.body.innerHTML = '';
    jest.useFakeTimers();
});

afterAll(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
});


describe('MyForm 组件测试', () => {
    const changeValue = async (
        container: HTMLElement,
        input: HTMLElement | null | number,
        value: string,
        advTimer = 1000,
    ) => {
        let element: HTMLElement;
    
        if (typeof input === 'number') {
            element = container.querySelectorAll('input')[input];
        }

        expect(container).toBeDefined()
    
        expect(element!).toBeTruthy();
    
        fireEvent.change(element!, {
            target: {
                value,
            },
        });
    
        if (advTimer) {
            await waitFakeTimer(advTimer / 20);
        }
    };

    it('submit form with valid data', async () => {
        // jest.mockImplementation() 是 Jest 提供的一种 Mock 函数实现的方式。它可以用于在测试中模拟某个函数的行为，并改变该函数的返回值、抛出错误等。
        const onFinish = jest.fn().mockImplementation(() => {});;
        const onFinishFailed = jest.fn().mockImplementation(() => {});

        const {getByLabelText, getByTestId, getByText, container}  = render(<MyForm onFinish={onFinish} onFinishFailed={onFinishFailed} />);

        // 改变输入框的值
        expect(container.querySelectorAll('.ant-input').length).toBe(1);
        await changeValue(container, 0, 'testuser');

        // 验证成功函数
        fireEvent.submit(container.querySelector('form')!);
        await waitFakeTimer()
        expect(onFinish).toHaveBeenCalled();
        expect(onFinish).toHaveBeenCalledWith({username: 'testuser'});

        // 验证失败函数
        await changeValue(container, 0, '');
        fireEvent.submit(container.querySelector('form')!);
        await waitFakeTimer()
        expect(onFinishFailed).toHaveBeenCalled();
        expect(getByText('Please input your username!')).toBeInTheDocument();
    });
})