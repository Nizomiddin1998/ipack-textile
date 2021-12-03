import React, {useState} from 'react';
import {connect} from "react-redux";
import {GrClose, GrEdit} from "react-icons/gr";
import {deleteExpense, addExpenseName, editExpanseName} from "../redux/expenseReducer";
import {ModalVisibleInfo} from "./ModalVisible";

function Expense({expense, users, cashBOX,deleteExpense,addExpenseName,editExpanseName}) {
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
                <h2>Chiqim</h2>
                <button className={'btn btn-dark px-4'} onClick={()=>typeToggle('addChiqim')}>+Add</button>
            </div>
            <table className={'table text-center'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Foydalanuvchi</th>
                    <th>Miqdori</th>
                    <th>Kassa</th>
                    <th>Vaqti</th>
                </tr>
                </thead>
                <tbody>
                {
                    expense.map((item,index)=> <tr key={index}>
                        <td>{item.id}</td>
                        {
                            users.map((user,index)=> parseInt(item.foydalanuvchi_id)===user.id && <td key={index}>
                                {user.name}
                            </td>)
                        }
                        <td>{item.miqdori}</td>
                        {
                            cashBOX.map((cash,index)=> parseInt(item.kassa_id)===cash.id&& <td key={index}>
                                {cash.name}
                            </td>)
                        }
                        <td>{item.vaqt}</td>
                        <td>
                            <span className={'EditBtn'} onClick={()=>typeToggle('editChiqim',index)}><GrEdit/></span> <span
                            className={'CloseBtn'} onClick={()=>deleteExpense(index)}><GrClose/></span>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        <ModalVisibleInfo isOpen={modalVisible}
                          toggle={toggle} type={type}
                          users={users}
                          cashBox={cashBOX}
                          addExpenseName={addExpenseName}
                          editExpanseName={editExpanseName}
                          idIndex={idIndex}
        />
        </div>
    );
}

// function mapStateToProps(state){
//     return {
//         expense: state.expenseReducer.expense,
//         users: state.usersReducer.users,
//         cashBox: state.cashBoxReducer.kassalar,
//     }
// }
export default connect(({expense:{expense}, users: {users}, cashBOX: {cashBOX}})=>({expense, users,cashBOX}),{deleteExpense,addExpenseName,editExpanseName})(Expense);