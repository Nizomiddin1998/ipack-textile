import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import DatePicker from "./DatePicker";

function ModalVisible({isOpen, toggle, type, addCashName, editCashName, idIndex}) {
    const [inputValue, setInputValue] = useState('')

    function SaveValue(e) {
        e.preventDefault()
        toggle()
        if (type === 'addCash')
            addCashName(inputValue)
        else if (type === 'editCash') {
            editCashName(inputValue, idIndex)
        }
        setInputValue('')
    }

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>
                    Kassa qo'shish
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={SaveValue} id={'form-id'}>
                        <input className={'form-control'} value={inputValue}
                               onChange={(e) => setInputValue(e.target.value)} type="text" placeholder={'Nomi'}/>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button className={'btn btn-secondary'} onClick={toggle}>Chiqish</button>
                    <button className={'btn btn-primary'} form={'form-id'}>Saqlash</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalVisible;

export function ModalVisibleInfo({
                                     isOpen,
                                     toggle,
                                     type,
                                     users,
                                     cashBox,
                                     addExpenseName,
                                     editExpanseName,
                                     idIndex,
                                     addIncomeName,
                                     editIncomeName
                                 }) {

    function SaveValue(e) {
        e.preventDefault()
        toggle()
        if (type === 'addChiqim') {
            addExpenseName(e.target)
        } else if (type === 'editChiqim') {
            editExpanseName(e.target, idIndex)
        } else if (type === 'addKirim') {
            addIncomeName(e.target)
        } else if (type === 'editKirim')
            editIncomeName(e.target,idIndex)

    }

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
                {type === 'addChiqim' ? 'Chiqim' : ''} qo'shish
            </ModalHeader>
            <ModalBody>
                <form onSubmit={SaveValue} id={'form-id'} className={'w-75 m-auto'}>
                    <select className={'form-select my-2 '}>
                        <option hidden value="">Foydalanuvchilarni tanlang</option>
                        {
                            users.map((item, index) => <option key={index} value={item.id}>
                                {item.name}
                            </option>)
                        }
                    </select>
                    <select className={'form-select my-2'}>
                        <option hidden value="">Foydalanuvchilarni tanlang</option>
                        {
                            cashBox.map((item, index) => <option key={index} value={item.id}>
                                {item.name}
                            </option>)
                        }
                    </select>
                    <input className={'form-control my-2'} type="text" placeholder={'Miqdori'}/>
                    <DatePicker/>
                </form>
            </ModalBody>
            <ModalFooter>
                <button className={'btn btn-secondary'} onClick={toggle}>Chiqish</button>
                <button className={'btn btn-primary'} form={'form-id'}>Saqlash</button>
            </ModalFooter>
        </Modal>
    );
}