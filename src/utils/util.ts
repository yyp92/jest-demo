import { render, act } from '@testing-library/react';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = (path: string): boolean => reg.test(path);

// 审批状态
export const getApprovalStatus = (status?: string) => {
    const map: any = {
        noApproval: {
            text: '未审批',
            rightBtnText: '查看薪资',
            color: '#898D97',
            borderColor: '#898D97'
        },
        inApproval: {
            text: '审批中',
            rightBtnText: '查看薪资',
            color: '#FFB439',
            borderColor: '#FFB439'
        },
        approved: {
            text: '审批通过',
            rightBtnText: '查看薪资',
            color: '#29C78F',
            borderColor: '#29C78F'
        },
        refuse: {
            text: '审批驳回',
            rightBtnText: '查看薪资',
            color: '#F43835',
            borderColor: '#F43835'
        },
        failed: {
            text: '计算失败',
            rightBtnText: '重新计算',
            color: '#F43835',
            borderColor: '#F43835'
        },
    }
  
    return status && map?.[status] ? map[status] : null
}

export async function waitFakeTimer(advanceTime = 1000, times = 20) {
    for (let i = 0; i < times; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        // @testing-library/react 中的 act() 是一个测试工具，它用于协调和处理 React 组件与 DOM 之间的交互。它的作用是在进行 React 组件的测试时，使得测试代码能够更好地模拟用户与组件的交互，从而更准确、更完整地测试组件的行为。
        // act() 的作用是强制所有已安排的副作用在单个测试运行期间同步执行。
        await act(async () => {
            await Promise.resolve();
    
            if (advanceTime > 0) {
                // advanceTimersByTime 是 Jest 提供的一个 API，用于在测试中模拟时间流逝。这个函数将所有定时器的时间提前了指定的毫秒数，相当于手动将时间快进。如果在快进的时间范围内有已经被注册的定时器，则会立即执行它们。
                jest.advanceTimersByTime(advanceTime);
            }
            else {
                // jest.runAllTimers() 是 Jest 提供的一个 API，用于立即运行所有定时器的回调函数。这个函数相当于手动将时间快进到最后，同时立即执行所有已经注册的定时器的回调函数。
                jest.runAllTimers();
            }
        });
    }
}