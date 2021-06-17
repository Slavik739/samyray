import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = () => {
  return (
      <div className={s.wrapper}>
        <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}><NavLink to="/dialogs/1">Dmitriy</NavLink></div>
            <div className={s.dialog}><NavLink to="/dialogs/2">Andrey</NavLink></div>
            <div className={s.dialog}><NavLink to="/dialogs/3">Svetlana</NavLink></div>
            <div className={s.dialog}><NavLink to="/dialogs/4">Alisa</NavLink></div>
            <div className={s.dialog}><NavLink to="/dialogs/5">Petty</NavLink></div>
          </div>
        </div>
        <div className={s.massages}>
          <div className={s.massage}>Hello</div>
          <div className={s.massage}>How are you?</div>
          <div className={s.massage}>I'm see sea</div>
        </div>
      </div>
  )
}

export default Dialogs;