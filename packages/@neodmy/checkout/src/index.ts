import UserApi from 'packages/@neodmy/user';
import OrderApi from 'packages/@neodmy/order';

export default class Checkout {
	constructor(
		private readonly userApi = new UserApi(),
		private readonly orderApi = new OrderApi(),
	) {}

	generateOrder() {
		const user = this.userApi.getUser();
		const order = this.orderApi.getOrder(user.id);
		return {
			user,
			order,
		};
	}
}
