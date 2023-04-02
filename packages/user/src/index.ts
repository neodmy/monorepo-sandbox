type Address = {
	city: string;
	streetName: string;
	streetAddress: string;
	zipCode: string;
	state: string;
	country: string;
	coordinates: {
		lat: number;
		lng: number;
	};
};

export type User = {
	id: number;
	uid: string;
	password: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	avatar: string;
	gender: string;
	phoneNumber: string;
	dateOfBirth: string;
	creditCard: string;
	address: Address;
};

export default class UserApi {
	getUser(): User {
		return {
			id: 9822,
			uid: '658370ce-404d-4ed7-83bc-cca00b717779',
			password: 'hDcZETaAsB',
			firstName: 'Shaun',
			lastName: 'Orn',
			username: 'shaun.orn',
			email: 'shaun.orn@email.com',
			avatar: 'https://robohash.org/aliquidutconsequuntur.png?size=300x300&set=set1',
			gender: 'Agender',
			phoneNumber: '+7 644.839.8654 x7138',
			dateOfBirth: '1978-08-04',
			address: {
				city: 'Jordonborough',
				streetName: 'Considine Throughway',
				streetAddress: '731 Harber Unions',
				zipCode: '60759-5987',
				state: 'Pennsylvania',
				country: 'United States',
				coordinates: {
					lat: 72.96807365612602,
					lng: 8.044121136150324,
				},
			},
			creditCard: '6771-8912-9401-7013',
		};
	}
}
