import { render, act } from '@testing-library/react';

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
        await act(async () => {
            await Promise.resolve();
    
            if (advanceTime > 0) {
                jest.advanceTimersByTime(advanceTime);
            }
            else {
                jest.runAllTimers();
            }
        });
    }
}