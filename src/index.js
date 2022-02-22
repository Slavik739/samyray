import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
	{id: 1, message: "hi, how are you?", likesCount: 1},
	{id: 2, message: "It's my first post", likesCount: 45},
	{id: 3, message: "I'm in work now", likesCount: 12},
	{id: 4, message: "Lorem", likesCount: 0},
]
let dialogs = [
	{id: 1, name: "Dimuch"},
	{id: 2, name: "Andrey"},
	{id: 3, name: "Svetlana"},
	{id: 4, name: "Alisa"},
	{id: 5, name: "Petty"}
]
let messages = [
	{id: 1, message: "Hello"},
	{id: 2, message: "How are you?"},
	{id: 3, message: "I'm see sea"},
	{id: 4, message: "Yo"},
	{id: 5, message: "Yo~"}
]

ReactDOM.render(
	<React.StrictMode>
		<App postData={postData} dialogs={dialogs} messages={messages}/>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
