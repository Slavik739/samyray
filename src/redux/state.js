import {renderTree} from "../renderTree";

let state = {
	profilePage: {
		postData: [
			{id: 1, message: "hi, how are you?", likesCount: 1},
			{id: 2, message: "It's my first post", likesCount: 45},
			{id: 3, message: "I'm in work now", likesCount: 12},
			{id: 4, message: "Lorem", likesCount: 0},
		],
		dialogs: [
			{id: 1, name: "Dimuch"},
			{id: 2, name: "Andrey"},
			{id: 3, name: "Svetlana"},
			{id: 4, name: "Alisa"},
			{id: 5, name: "Petty"}
		]
	},
	messagesPage: {
		messages: [
			{id: 1, message: "Hello!"},
			{id: 2, message: "How are you?"},
			{id: 3, message: "I'm see sea"},
			{id: 4, message: "Yo"},
			{id: 5, message: "Yo~"}
		]
	}
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 1
	}
	state.profilePage.postData.push(newPost)
	renderTree(state)
}


export default state;