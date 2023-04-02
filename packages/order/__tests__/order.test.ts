import OrderApi from '../src';

describe('Order API', () => {
	it('should have the user id and the products', () => {
		const order = new OrderApi();
		expect(order.getOrder(1)).toEqual(expect.objectContaining({
			user: expect.any(Number),
			products: expect.any(Array),
		}));
	});
});
