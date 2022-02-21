import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
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

	let dialigsElement = dialogs.map(dlg => <DialogItem key={dlg.id} name={dlg.name} id={dlg.id}/>)
	let messsagesElement = messages.map(mes => <Message key={mes.id}message={mes.message}/>)

	return (
		<div className={s.wrapper}>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{dialigsElement}
				</div>
			</div>
			<div className={s.massages}>
				{messsagesElement}
			</div>
		</div>
	)
}

export default Dialogs;