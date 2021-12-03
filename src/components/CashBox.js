import React, {useState} from 'react';
import {connect} from "react-redux";
import {GrEdit, GrClose} from 'react-icons/gr';
import ModalVisible from "./ModalVisible";
import {addCashName, deleteCash,editCashName} from "../redux/cashBoxReducer";

function CashBox({cashBOX, addCashName,deleteCash,editCashName}) {
    const [modalVisible, setModalVisible] = useState(false)
    const [type, setType] = useState('')
    const [idIndex, setIdIndex] = useState('')

    function toggle() {
        setModalVisible(prev => !prev)
    }
    function typeToggle(type,id){
        toggle()
        setType(type)
        setIdIndex(id)
    }

    return (
        <div className={'container mt-4'}>
            <div className={'d-flex justify-content-between'}>
                <span> </span>
                <h2>Kassa</h2>
                <button className={'btn btn-dark px-4'} onClick={()=>typeToggle('addCash')}>+Add</button>
            </div>
            <table className={'table'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nomi</th>
                </tr>
                </thead>
                <tbody>
                {
                    cashBOX.map((item, index) => <tr key={index}>
                        <td><h3>{item.id}</h3></td>
                        <td><h3>{item.name}</h3></td>
                        <td>
                            <span className={'EditBtn'} onClick={()=>typeToggle('editCash',index)}><GrEdit/></span> <span
                            className={'CloseBtn'} onClick={()=>deleteCash(index)} ><GrClose/></span>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
            <ModalVisible toggle={toggle}
                          isOpen={modalVisible}
                          type={type} cashBox={cashBOX}
                          addCashName={addCashName}
                          idIndex={idIndex}
                          editCashName={editCashName}
            />
        </div>
    );
}

// function mapStateToProps(state) {
//     return {
//         cash: state.cashBoxReducer.kassalar
//     }
// }

export default connect(({cashBOX:{cashBOX}})=>({cashBOX}),{addCashName,deleteCash,editCashName})(CashBox);