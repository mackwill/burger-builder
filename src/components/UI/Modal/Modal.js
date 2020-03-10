import React from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'


const modal = (props) => (
    <Auxiliary>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={'Modal ' + (props.show ? 'showTrue' : 'showFalse')}>
            {props.children}
        </div>
    </Auxiliary>
)

export default modal;