import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = () => {
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
	return (
		<div className={s.wrapper}>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					<DialogItem name="Dimuch" id="1" active="active"/>
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