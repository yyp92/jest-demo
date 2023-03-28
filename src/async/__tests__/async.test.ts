import {fetchData} from '../async'

// 测试用例使用回调函数来测试异步执行的结果
test('fetchData 返回的数据应该是 "data"', () => {
    function callback(data: string) {
        expect(data).toBe('data');
    }
  
    fetchData(callback);
});
  
// 测试用例使用了 Jest 提供的 done 函数，测试结束前会一直等待 done() 被调用
test('fetchData 返回的数据应该是 "data"', done => {
    function callback(data: string) {
        expect(data).toBe('data');
        done();
    }

    fetchData(callback);
});
  
// 测试用例使用了 Promise 和 async/await，它使用 Promise 包装异步函数，并等待 Promise 被成功解决后再断言异步返回结果
test('fetchData 返回的数据应该是 "data"', async () => {
    const data = await new Promise<string>(resolve => {
        fetchData(resolve);
    });

    expect(data).toBe('data');
});