import React, { useState } from 'react'

export const Table = ({taskList, switchTask, deleteTask, badHour}) => {
const goodList = taskList.filter(item=>item.type=="good");
const badList = taskList.filter(item=>item.type=="bad");

let goodIndex = 0;
let badIndex = 0;
  return (
    <div className="row">
    <div className="col-6 text-center ">
        <h3>GOOD LIST</h3>
        <hr/>
        
        <table className="table">
            <tbody id="goodList">
               {
                goodList.map((item,index)=>{
                    goodIndex += 1;
                    return(
                        <tr key={item.id}>
                            <th scope="row">{goodIndex}</th>
                            <td>{item.task}</td>
                            <td>{item.hour}</td>
                            <td className="text-end"><button type="button" className="btn btn-danger" onClick={()=>deleteTask(item.id)} ><i className="fa-solid fa-trash"></i></button>
                            <button type="button" className="btn btn-success" onClick={()=>switchTask(item.id)} ><i className="fa-solid fa-arrow-right"></i></button>
                            </td>
                        </tr>
                    )
                    
                })
               } 
            </tbody>
        </table>
        
    </div>
    <div className="col-6 text-center ">
        <h3>BAD LIST</h3>
        <hr/>
        <table className="table">
            <tbody id="badList">
                 {
                    badList.map((item,index)=>{
                        badIndex += 1;
                        return(
                            <tr key={item.id}>
                                <th scope="row">{badIndex}</th>
                                <td>{item.task}</td>
                                <td>{item.hour}</td>
                                <td className="text-end"><button type="button" className="btn btn-warning" onClick={()=>switchTask(item.id)}><i className="fa-solid fa-arrow-left"></i></button>
                                <button type="button" className="btn btn-danger"onClick={()=>deleteTask(item.id)} ><i className="fa-solid fa-trash"></i></button></td>
                            </tr>
                        )
                        
                    })
                 }
            </tbody>
        </table>
        <div className="alert alert-danger" role="alert">
            You could have saved = <span id="badHour">{badHour}</span> hrs
        </div>
    </div>
</div>
  )
}
