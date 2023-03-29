import {getApprovalStatus} from '../util'

describe('getApprovalStatus tests', () => {
    it('should return noApproval', (): void => {
        const noApprovalData = {
            text: '未审批',
            rightBtnText: '查看薪资',
            color: '#898D97',
            borderColor: '#898D97'
        };
  
        expect(getApprovalStatus('noApproval')).toEqual(noApprovalData);
    });
  
    it('should return inApproval', (): void => {
        const inApprovalData = {
            text: '审批中',
            rightBtnText: '查看薪资',
            color: '#FFB439',
            borderColor: '#FFB439'
        };
  
        expect(getApprovalStatus('inApproval')).toEqual(inApprovalData);
    });
  
    it('should return approved', (): void => {
        const approvedData = {
            text: '审批通过',
            rightBtnText: '查看薪资',
            color: '#29C78F',
            borderColor: '#29C78F'
        };
    
        expect(getApprovalStatus('approved')).toEqual(approvedData);
    });
  
    it('should return refuse', (): void => {
        const refuseData = {
            text: '审批驳回',
            rightBtnText: '查看薪资',
            color: '#F43835',
            borderColor: '#F43835'
        };
    
        expect(getApprovalStatus('refuse')).toEqual(refuseData);
    });
  
    it('should return failed', (): void => {
        const failedData = {
            text: '计算失败',
            rightBtnText: '重新计算',
            color: '#F43835',
            borderColor: '#F43835'
        };
    
        expect(getApprovalStatus('failed')).toEqual(failedData);
    });

    it('should return null', (): void => {
        const otherData = null;
    
        expect(getApprovalStatus('')).toEqual(otherData);
    });
  })