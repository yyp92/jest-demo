import axios from 'axios';
import Users from '../users';

jest.mock('axios');

describe('Axios tests', () => {
    it('should return data on successful request', async () => {
        const users = [{name: 'Bob'}];
        const resp = {data: users};

        const getSpy = jest.spyOn(axios, 'get');
        getSpy.mockResolvedValue(resp);

        // const response = await axios.get('/api/data');
        // expect(response.data).toEqual(mockResponse.data);
        // expect(getSpy).toHaveBeenCalledTimes(1);
        // getSpy.mockClear();

        return Users.all().then(data => expect(data).toEqual(users));
    });
});