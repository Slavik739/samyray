import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
      <div className={s.wrapper}>
        <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            <div className={s.dialog+' '+s.active}>Dmitriy</div>
            <div className={s.dialog}>Andrey</div>
            <div className={s.dialog}>Svetlana</div>
            <div className={s.dialog}>Alisa</div>
            <div className={s.dialog}>Petty</div>
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