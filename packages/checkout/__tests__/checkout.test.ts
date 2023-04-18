import CheckoutApi from '../src';

describe('Checkout API', () => {
	it('should have the user and the order data', () => {
		const checkout = new CheckoutApi();
		expect(checkout.generateOrder()).toEqual(expect.objectContaining({
			user: expect.any(Object),
			order: expect.any(Object),
		}));
	});
});
