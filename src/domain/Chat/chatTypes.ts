export interface Chat {
	id: string; // e4eaaaf2-d142-11e1-b3e4-080027620cdd
	chatName?: string; // Gabriel Camargo
	chatAvatarUrl: string; // https://github.com/gabrielcaamargo.png
	chatParticipants: Array<{
		// TODO: Refactor entity
		id: string; // e4eaaaf2-d142-11e1-b3e4-080027620g25
		name: string; // Gabriel Camargo
		profilePictureUrl: string; // https://github.com/gabrielcaamargo.png
	}>;
	messages: Array<{
		// TODO: Refactor entity
		id: string; // e4eaaaf2-d142-11e1-b3e4-080027620cdd
		message: string; // Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere provident perferendis libero incidunt suscipit officiis.
		sender: {
			id: string; // e4eaaaf2-d142-11e1-b3e4-080027620g25
			name: string; // Gabriel Camargo
			profilePictureUrl: string; // https://github.com/gabrielcaamargo.png
		};
		receiver: {
			id: string; // e4eaaaf2-d142-11e1-b3e4-080027620g25
			name: string; // Gabriel Camargo
			profilePictureUrl: string; // https://github.com/gabrielcaamargo.png
		};
		createdAt: Date; // 2021-09-01T00:00:00.000Z
		updatedAt: Date; // 2021-09-01T00:00:00.000Z
	}>;
}

export interface ChatApi {
	id: string; // e4eaaaf2-d142-11e1-b3e4-080027620cdd
	chat_name?: string; // Gabriel Camargo
	chat_avatar_url: string; // https://github.com/gabrielcaamargo.png
	chat_participants: Array<{
		// TODO: Refactor entity
		id: string; // e4eaaaf2-d142-11e1-b3e4-080027620g25
		name: string; // Gabriel Camargo
		profile_picture_url: string; // https://github.com/gabrielcaamargo.png
	}>;
	messages: Array<{
		// TODO: Refactor entity
		id: string; // e4eaaaf2-d142-11e1-b3e4-080027620cdd
		message: string; // Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere provident perferendis libero incidunt suscipit officiis.
		sender: {
			id: string; // e4eaaaf2-d142-11e1-b3e4-080027620g25
			name: string; // Gabriel Camargo
			profile_picture_url: string; // https://github.com/gabrielcaamargo.png
		};
		receiver: {
			id: string; // e4eaaaf2-d142-11e1-b3e4-080027620g25
			name: string; // Gabriel Camargo
			profile_picture_url: string; // https://github.com/gabrielcaamargo.png
		};
		created_at: Date; // 2021-09-01T00:00:00.000Z
		updated_at: Date; // 2021-09-01T00:00:00.000Z
	}>;
}
