import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (p) => {

	let dialigsElement = p.dialogs.map(dlg => <DialogItem key={dlg.id} name={dlg.name} id={dlg.id}/>)
	let messsagesElement = p.messages.map(mes => <Message key={mes.id} message={mes.message}/>)

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