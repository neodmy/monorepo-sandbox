import UserApi from '../src';

describe('User API', () => {
	it('should have an id', () => {
		const userApi = new UserApi();
		expect(userApi.getUser()).toEqual(expect.objectContaining({id: expect.any(Number)}));
	});
});
