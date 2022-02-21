import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return <div className={s.dialog}>
		<NavLink to={"/dialogs/" + props.id}
						 className={props.active === 'active' ? s.active : ""}>
			{props.name}
		</NavLink>
	</div>
}
const Message = (props) => {
	return <div className={s.massage}>{props.message}</div>
}

const Dialogs = () => {
	let dialogsData = [
		{id: 1, name: "Dimuch"},
		{id: 2, name: "Andrey"},
		{id: 3, name: "Svetlana"},
		{id: 4, name: "Alisa"},
		{id: 5, name: "Petty~"}
	]
	let messagesData = [
		{id: 1, message: "Hello"},
		{id: 2, message: "How are you?"},
		{id: 3, message: "I'm see sea"},
		{id: 4, message: "Yo"},
		{id: 5, message: "Yo~"}
	]
	return (
		<div className={s.wrapper}>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
					<DialogItem name="Andrey" id="2"/>
					<DialogItem name="Svetlana" id="3"/>
					<DialogItem name="Alisa" id="4"/>
					<DialogItem name="Petty~" id="5"/>
				</div>
			</div>
			<div className={s.massages}>
				<Message message="Hello!"/>
				<Message message="How are you?"/>
				<Message message="I'm see sea"/>
				<Message message="Yo"/>
				<Message message="Yo"/>
				<Message message="Yo"/>
			</div>
		</div>
	)
}

export default Dialogs;