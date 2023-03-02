// import React, { useState } from "react";

// function InputBoard() {


//     const [inputTitle, setInputTitle] = useState('');
//     const [todoTitle, setTodoTitle] = useState([]);

//     const addList = () => {
//         setTodoTitle([...todoTitle, inputTitle]);
//     }

//     return (
//         <div className='input-board'>
//             <div className='input-box'>
//                 {todoTitle}
//                 <label className='input-label'>제목</label>
//                 <input type='text' className='input'
//                     value={inputTitle}
//                     onChange={(event) => setInputTitle(event.target.value)}
//                 />

//                 <label className='input-label'>내용</label>
//                 <input type='text' className='input' />
//             </div>
//             <button className='input-button'
//             onClick={addList}
//             >추가하기</button>
//         </div>
//     );
// }

// export default InputBoard;