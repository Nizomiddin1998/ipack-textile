import React, {useState} from 'react';
import {connect} from "react-redux";
import {GrClose, GrEdit} from "react-icons/gr";
import {deleteIncome, addIncomeName, editIncomeName} from "../redux/action";
import {ModalVisibleInfo} from "./ModalVisible";

function Income({income,users,cashBox,deleteIncome,addIncomeName,editIncomeName}) {
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
                <h2>Kirim</h2>
                <button className={'btn btn-dark px-4'} onClick={()=>typeToggle('addKirim')}>+Add</button>
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
                    income.map((item,index)=> <tr key={index}>
                        <td>{item.id}</td>
                        {   users.map((user,index)=> parseInt(item.foydalanuvchi_id)===user.id&& <td key={index}>
                                {user.name}
                            </td> )
                        }
                        <td>{item.miqdori}</td>
                        {
                           cashBox.map((cash,index)=> parseInt(item.kassa_id)===cash.id && <td key={index}>
                               {cash.name}
                           </td>)
                        }
                        <td>{item.vaqt}</td>
                        <td>
                            <span className={' EditBtn'} onClick={()=>typeToggle('editKirim',index)}><GrEdit/></span> <span
                            className={' CloseBtn'} onClick={()=>deleteIncome(index)}><GrClose/></span>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        <ModalVisibleInfo isOpen={modalVisible}
                          toggle={toggle}
                          type={type}
                          users={users}
                          cashBox={cashBox}
                          idIndex={idIndex}
                          addIncomeName={addIncomeName}
                          editIncomeName={editIncomeName}
        />
        </div>
    );
}
function mapStateToProps(state){
    return {
        income: state.incomeReducer.income,
        users: state.usersReducer.users,
        cashBox: state.cashBoxReducer.kassalar
    }
}
export default connect(mapStateToProps,{deleteIncome,addIncomeName,editIncomeName})(Income);