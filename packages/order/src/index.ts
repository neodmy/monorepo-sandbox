type Product = {
	id: number;
	uid: string;
	buildNumber: number;
	manufacturer: string;
	model: string;
	platform: string;
	serialNumber: string;
	version: number;
};

export type Order = {
	user: number;
	products: Product[];
};

export default class OrderApi {
	// mock comment
	getOrder(userId: number): Order {
		return {
			user: userId,
			products: [
				{
					id: 5467,
					uid: '5fcff68b-b164-4328-a7cc-b46761b95699',
					buildNumber: 334,
					manufacturer: 'OnePlus',
					model: 'iPhone 5S',
					platform: 'Ubuntu Touch',
					serialNumber: 'tL&^J@24CVF=zP46Lxixk`_a#=o6c5',
					version: 936,
				},
				{
					id: 2414,
					uid: 'ad82c3fe-c51e-4312-8253-21b0ec9131a1',
					buildNumber: 111,
					manufacturer: 'Apple',
					model: 'iPhone 7 / 7 Plus',
					platform: 'Windows 10',
					serialNumber: 'hHhDJaHCO',
					version: 73,
				},
			],
		};
	}
}
