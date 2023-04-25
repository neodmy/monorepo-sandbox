import UserApi from 'monorepo-sandbox-user';
import OrderApi from 'monorepo-sandbox-order';

export default class Checkout {
	constructor(
		private readonly userApi = new UserApi(),
		private readonly orderApi = new OrderApi(),
	) {}

	generateOrder() {
		const user = this.userApi.getUser();
		const order = this.orderApi.getOrder(user.id);
		// mock comment
		return {
			user,
			order,
		};
	}
}
