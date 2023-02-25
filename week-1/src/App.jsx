/* import React from 'react'

export default function App() {

  const a = 7;
  const b = 10;

  const testArr = [1, 2, 3];

  return <div>안녕하세요 {a + b}입니다.</div>;
}
 */


// import React from 'react'

// export default function App() {
//   const number = 11;
//   const pTagStyle = {
//     color: 'red',
//   }
//   return (
//     <div className='test-class'>
//       <p style={pTagStyle}>안녕하세요 리액트입니다.</p>
//       {/* 주석을 사용하는 방법입니다. */}
//       {/* 삼항 연산자를 사용해볼게요! */}
//       <p style={pTagStyle}>
//         {number > 10 
//         ? number + '은 10보다 크다.' 
//         : number + '은 10보다 작다.'}
//       </p>
//     </div>
//   )
// }






// 9강 props 개요


/* 
import React from 'react'

// props를 통해 부모->자식 데이터가 전달됐다.
function Son(props) {
  console.log('props', props.motherName);
  return <div>나는 {props.motherName}의 아들이에요!</div>;
}

// 부모 -> 자식 정보를 전달했다!
function Mother() {
  const name = '홍부인'
  return <Son motherName={name} />;
}

function GrandFather() {
  return <Mother />;
}

function App() {
  return <GrandFather />;
}

export default App
 */

/* 

import React from 'react'

function Son(props) {
  console.log('props', props); // {gfName: '손할아버지'}
  return <div>나는 {props.gfName}의 손자예요!</div>;
}

function Mother(props) {
  console.log('Props', props); // {grandFatherName: '손할아버지'}
  const gfName = props.grandFatherName;
  const name = '홍부인';
  return <Son gfName={gfName} />;
}

function GrandFather() {
  const name = '손할아버지';
  return <Mother grandFatherName={name}/>;
}

function 

App() {
  return <GrandFather />;
}
export default App

 */








//10강 props children

/* 
import React from 'react'

function App() {
  const name = '상위컴포넌트이름!';
  return <User />;
}

function User(props) {
  return <div> {props.name} </div>
}

export default App

 */


/* 

import React from 'react'

function App() {
  return <User>안녕하세요!</User>;
}



function User(props) {
  console.log('props', props); //{children: '안녕하세요!'}
  return <div>{props.children}</div>;
}

export default App
 */

/* 
import React from 'react';
import Layout from 'Layout';

function App() {
  return (
  <Layout>
    <div> App컴포넌트에서 보내는 데이터입니다. 이 부분이 Layout이 받는 props.children이 되는거지요.</div>
  </Layout>
  )
}

export default App
 */










// 11강 props 추출
 
/* 
  //구조분해할당! 연습
  const testObj = {
    name: "yeong",
    age: 21,
    company: "Sparta",
  };

  const {name, age, company} = testObj;

  console.log("name", name);
  console.log('age', age);
  console.log('company', company);
 */

/* 
import React from 'react';
import Child from 'Child';

function App() {
 
  //props 3개 주기. (age, name, 이름)
  const name='test';
  return <Child 
            age={21}
            name={name} 
            >이름
          </Child>;
}


export default App
 */

/* 
import React from 'react';
import Child from 'Child';

function App() {
 
  //props 3개 주기. (age, name, 이름)
  const name='test';
  return <Child 
            name={name} 
            >이름
          </Child>;
}


export default App
 */


/* import React from 'react'

export default function App() {

  const a = 7;
  const b = 10;

  const testArr = [1, 2, 3];

  return <div>안녕하세요 {a + b}입니다.</div>;
}
 */


// import React from 'react'

// export default function App() {
//   const number = 11;
//   const pTagStyle = {
//     color: 'red',
//   }
//   return (
//     <div className='test-class'>
//       <p style={pTagStyle}>안녕하세요 리액트입니다.</p>
//       {/* 주석을 사용하는 방법입니다. */}
//       {/* 삼항 연산자를 사용해볼게요! */}
//       <p style={pTagStyle}>
//         {number > 10 
//         ? number + '은 10보다 크다.' 
//         : number + '은 10보다 작다.'}
//       </p>
//     </div>
//   )
// }






// 9강 props 개요


/* 
import React from 'react'

// props를 통해 부모->자식 데이터가 전달됐다.
function Son(props) {
  console.log('props', props.motherName);
  return <div>나는 {props.motherName}의 아들이에요!</div>;
}

// 부모 -> 자식 정보를 전달했다!
function Mother() {
  const name = '홍부인'
  return <Son motherName={name} />;
}

function GrandFather() {
  return <Mother />;
}

function App() {
  return <GrandFather />;
}

export default App
 */

/* 

import React from 'react'

function Son(props) {
  console.log('props', props); // {gfName: '손할아버지'}
  return <div>나는 {props.gfName}의 손자예요!</div>;
}

function Mother(props) {
  console.log('Props', props); // {grandFatherName: '손할아버지'}
  const gfName = props.grandFatherName;
  const name = '홍부인';
  return <Son gfName={gfName} />;
}

function GrandFather() {
  const name = '손할아버지';
  return <Mother grandFatherName={name}/>;
}

function 

App() {
  return <GrandFather />;
}
export default App

 */








//10강 props children

/* 
import React from 'react'

function App() {
  const name = '상위컴포넌트이름!';
  return <User />;
}

function User(props) {
  return <div> {props.name} </div>
}

export default App

 */


/* 

import React from 'react'

function App() {
  return <User>안녕하세요!</User>;
}



function User(props) {
  console.log('props', props); //{children: '안녕하세요!'}
  return <div>{props.children}</div>;
}

export default App
 */

/* 
import React from 'react';
import Layout from 'Layout';

function App() {
  return (
  <Layout>
    <div> App컴포넌트에서 보내는 데이터입니다. 이 부분이 Layout이 받는 props.children이 되는거지요.</div>
  </Layout>
  )
}

export default App
 */










// 11강 props 추출
 
/* 
  //구조분해할당! 연습
  const testObj = {
    name: "yeong",
    age: 21,
    company: "Sparta",
  };

  const {name, age, company} = testObj;

  console.log("name", name);
  console.log('age', age);
  console.log('company', company);
 */

/* 
import React from 'react';
import Child from 'Child';

function App() {
 
  //props 3개 주기. (age, name, 이름)
  const name='test';
  return <Child 
            age={21}
            name={name} 
            >이름
          </Child>;
}


export default App
 */

/* 
import React from 'react';
import Child from 'Child';

function App() {
 
  //props 3개 주기. (age, name, 이름)
  const name='test';
  return <Child 
            name={name} 
            >이름
          </Child>;
}

export default App
 */









//12강 State

/* 
import React from 'react'
import { useState } from 'react';

function App() {

  //hook
  // const [state, setState] = useState('initial Value');
  const [count, setCount] = useState();
  const [todoList, setTodoList] = useState();
  


  return (
    <div>App</div>
  )
}

export default App;
 */



/* 
import React from 'react'
import { useState } from 'react';

function App() {

  const [name, setName] = useState('김할아버지');

  return (
    <div>
      {name}
      <br />
      <button onClick={function () {
        setName("박할아버지")
      }}
      >
        클릭
      </button>
    </div>
  )
}

export default App;
 */

/* 

import React from 'react'
import { useState } from 'react';

function App() {
  const [fruit, setFruit] = useState("");

  return (
    <div>
      과일 : <input value={fruit} onChange={function(event) {
        // console.log('event', event.target.value);
        setFruit(event.target.value);
      }}
      />
      <br></br>
      {fruit}
    </div>
  );
}

export default App;

 */

/* 
import React from 'react'
import { useState } from 'react';

function App() {

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div>
      <div>
        아이디 : <input value={id} onChange={function (inputId) {
          setId(inputId.target.value);
        }}
        />
      </div>
      <div>
        비밀번호 : <input value={pw} onChange={function (inputPw) {
          setPw(inputPw.target.value);
        }}
        />
      </div>
      <button onClick={function () {
        alert(`고객님이 입력하신 아이디는 '${id}'이며, 비밀번호는 '${pw}'입니다.`);

      }}>로그인</button>
    </div>
  )
}

export default App
 */



import React from 'react'
import { useState } from 'react';

function App() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  console.log('id', id);
  console.log('pw', pw);

  //id 필드가 변경될 경우
  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  }

  //pw 필드가 변경될 경우
  const onPwChangeHandler = (event) => {
    setPw(event.target.value);
  }

  return (
    <div>
      <div>
        아이디 : <input type="text" value={id} onChange={onIdChangeHandler} />
      </div>
      <div>
        비밀번호 : <input type="password" value={pw} onChange={onPwChangeHandler} />
      </div>
      <button onClick={() => {
        alert(`고객님이 입력하신 아이디는 '${id}'이며, 비밀번호는 ${pw}입니다.`);
        setId("");
        setPw("");
      }}>로그인</button>
    </div>
  )
}

export default App