import { render, screen } from '@testing-library/react';
// axios-mock-adapter 是一个用于模拟 axios 请求的库，它允许您在单元测试中拦截和模拟 axios 请求的响应。
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import MyComponent from '../MyComponent';
import {mockData} from '../../../mock'

describe('MyComponent api test', () => {

    it('should adpter data', async () => {
        // 创建MockAdapter实例
        const mock = new MockAdapter(axios); 
        mock.onGet('/api/path').reply(200, mockData); // 模拟返回数据

        render(<MyComponent />);

        const items = await screen.findAllByText('mocked name');
        expect(items.length).toBe(1);
    });
});