/* 3강 useState

import React, { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0);

  return (
    <>
      <div >
        Number State: {number}
      </div>
      <button
        onClick={() => {
          // 기존 업데이트 방법
          // batch(일괄) update되면 > 모아서 한 번만 실행 됨

          // setNumber(number+1);
          // setNumber(number+1);
          // setNumber(number+1);

          // 함수형 업데이트
          // setNumber((currentNumber)=> {return currentNumber +1});
          // batch update하면 > 각 함수를 한번씩 실행하게 됨
          // (currentNumber에 +1한 값을 반환) * 총 3번 실행하게되므로
          // 한 번에 +3이 된다.

          // 렌더링이 잦으면 -> 성능에 이슈가 생김!
          
          setNumber((currentNumber) => currentNumber + 1);
          setNumber((currentNumber) => currentNumber + 1);
          setNumber((currentNumber) => currentNumber + 1);
        }}
      >
        누르면 UP
      </button>

    </>
  );
}

export default App;
---------------------------------------------------------------------------------
 */





/* 4강 useEffect
import React, { useEffect, useState } from "react";

// 1. input에 값을 입력
// 2. value, 즉 state가 변경
// 3. state가 바뀌었기 때문에 => App 컴포넌트가 리렌더링
// 4. 리렌더링 => useEffect 실행

function App() {
  const [value, setValue] = useState('');

  // App 컴포넌트가 실행될 때만 실행되길 바라서 만든 useEffect는 이런 모양새!
  // useEffect(() => {
  //   console.log('Hello, useEffect!');
  // }, []);

  // value가 변화할 때 실행되길 바란다면 이렇게!
  // useEffect(() => {
  //   console.log(`Hello, useEffect! : ${value}`);
  // }, [value]);

  // clean up!
  useEffect(() => {
    console.log(`Hello, useEffect! : ${value}`);

    return () => {
      console.log('사라져요')
    }
  }, [value]);

  return <div>
    <input
      type='text'
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  </div>
}

export default App;
-------------------------------------------------------------------------------------
 */




/* 5강 useRef
import React, {useRef, useState} from "react";

function App () {
  // const ref = useRef('초기값');
  // console.log('ref', ref);

  // ref.current = '변경값';
  // console.log('ref2', ref);

  const style = {
    border: '1px solid green',
    margin: '10px',
    padding: '10px',
  }

  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const plusStateCountButtonHandler = () => {
    setCount(count +1);

  }
  const plusRefCountButtonHandler = () => {
    countRef.current++;
    console.log(countRef.current);
  }

  return <>
    <div style={style}>
      State 영역입니다. {count} <br />
      <button onClick={plusStateCountButtonHandler}>state 증가</button>
    </div>
    <div style={style}>
      ref 영역입니다. {countRef.current} <br />
      <button onClick={plusRefCountButtonHandler}>ref 증가</button>
    </div>
  </>
};

export default App;
 */

/* 
import React, {useRef, useEffect, useState} from "react";

function App() {
  // 화면이 렌더링 될 때, 어떤 작업을 하고 싶다! : useEffect!
  // 렌더링 됐을 때 특정 태그에 포거싱하고 싶다 = 특정 태그에 대한 ref를 가지고 있어야 함 : useRef!

  const idRef = useRef('');
  const pwRef = useRef('');

  const [id, setId] = useState('');

  useEffect(()=> {
    // console.log('First Rendering!')
    idRef.current.focus();
  }, []);

  // useEffect(()=> {
  //   if(id.length >= 10) {
  //     pwRef.current.focus()
  //   }
  // }, [id]);



  const idChangeHandler = (event) => {
    setId(event.target.value);
    console.log('id', id);

    // react에서 state => batch update되기 때문에 반영이 한 번(?) 딜레이 됨.
    if (id.length >= 10) {
      pwRef.current.focus();
    }

  }

  return <>
    <div >
        ID : 
      <input
        value={id}
        onChange={idChangeHandler}
        type='text' ref={idRef}
      />
    </div>
    <div>
        PW : <input type='password' ref={pwRef}/>
    </div>
  </>
}

export default App;
----------------------------------------------------------------------------------
 */




/* 6강 useContext
import React, {useContext} from "react";
import GrandFather from "./components/GrandFather";

function App() {

  return <GrandFather />;
};

export default App;
----------------------------------------------------------------------------------
 */



/* 8강 useCallback
import React, {useCallback, useState} from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

function App() {
  console.log('App컴포넌트가 렌더링되었습니다.');

  const [count, setCount] = useState(0);

  //1증가
  const onPlusButtonHandler = () => {
    setCount(count +1);
  }

  //1감소
  const onMinusButtonHandler = () => {
    setCount(count -1);
  }

  // count 초기화 해주는 함수
  // 바뀐 게 있나요? 
  // 함수도 JS에서는 객체의 일종으로, 메모리에 직접적으로 저장되는 것이 아니라 별도의 공간에 할당, 그 주소를 저장한다.
  // 함수형 컴포넌트가 리렌더링 되며 함수들이 다시 만들어질 때, 새로운 공간에 함수를 할당하며 새로운 주소를 저장한다.
  // 즉 저장된 주소값이 바뀌며 => props를 내릴 때 새로운 주소값을 내리므로
  // props를 받는 입장에서는 props가 변경된 것으로 알게 된다!
  const initCount = useCallback(() => {
    console.log(`${count}에서 0으로 변경되었습니다.`);
    // useCallback이 함수를 저장하는 시점에 count는 0이기 때문에, 
    // dependency array에 count를 넣지 않으면 0에서 0으로 변경되었다고밖에 찍히지 않는다.
    setCount(0);
  }, [count]);

  return ( 
  <>
    <h3>카운트 예제입니다!</h3>
    <p>현재 카운트 : {count}</p>
    <button onClick={onPlusButtonHandler}>+</button>
    <button onClick={onMinusButtonHandler}>-</button>

    <div style={{
      display: 'flex',
      marginTop: '10px'
    }}>
      <Box1 initCount={initCount} />
      <Box2 />
      <Box3 />
    </div>
  </>
  )
};

export default App;
----------------------------------------------------------------------------------
 */




/* 9강 useMemo
import React from "react";
import HeavyComponent from "./components/HeavyComponent";

// 이거슨 heavy work!! => 이러한 가정을 해야 useMemo가 의미가 있다!
function App() {
  return(
  <>
    <nav style={{
      backgroundColor: "orange",
      marginBottom: "30px",
    }}
    >
      네비게이션 바
      </nav>
    <HeavyComponent />
    <footer style={{
      backgroundColor: "green",
      marginBottom: "30px",
    }}
    >
      푸터 영역이에요.
      </footer>
  </>
  )
};

export default App;
 */


/* 
import React from "react";
import ObjectComponent from "./components/ObjectComponent";

function App() {
  return(
  <>
    <ObjectComponent />
  </>
  )
};

export default App;
----------------------------------------------------------------------------------
 */





// 12~15강
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// function App() {

//   // 여기에서 store에 접근해서, counter의 값을 읽어오고 싶다!
//   // useSelector
//                     //여기서 state는 모든 state!
//   const counter = useSelector((state)=> {
//     return state.counter;
//   });
//   // console.log("counter ->", counter.number);


//   // dispatch를 사용할 것이다!
//   const dispatch = useDispatch();


//   return (
//     <>
//       <div>현재 카운트 : {counter.number}</div>

//       {/* button을 만들어서 그걸 누르면 count를 변경하도록 만들겠다! */}
//       <button onClick={()=> {
//         // counter.number에 +1을 해주는 로직을 써주면 된다. 
//         // >> counter라는 state를 변경할 거니까 어떻게 변경할지 dispatch로 type을 담은 action을 던져 줄 것.
//         dispatch({
//           type: 'PLUS_ONE',
//         });
//       }}
//       >
//         +
//       </button>
//       <button onClick={()=>{
//         dispatch({
//           type: 'MINUS_ONE'
//         });
//       }}>
//         -
//       </button>
//     </>
//   )
// };

// export default App;
// ----------------------------------------------------------------------------------






/* 16강 Redux Action Value Creator

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PLUS_ONE, MINUS_ONE } from "./redux/modules/counter";
import { plusOne, minusOne } from "./redux/modules/counter";

function App() {

  // 여기에서 store에 접근해서, counter의 값을 읽어오고 싶다!
  // useSelector
                    //여기서 state는 모든 state!
  const counter = useSelector((state)=> {
    return state.counter;
  });


  // dispatch를 사용할 것이다!
  const dispatch = useDispatch();


  return (
    <>
      <div>현재 카운트 : {counter.number}</div>

      <button onClick={()=> {
        dispatch(plusOne());
      }}
      >
        +
      </button>
      <button onClick={()=>{
        dispatch(minusOne());
      }}>
        -
      </button>
    </>
  )
};

export default App;
----------------------------------------------------------------------------------
 */


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PLUS_ONE, MINUS_ONE } from "./redux/modules/counter";
import { plusOne, minusOne } from "./redux/modules/counter";
import { plusN, minusN } from "./redux/modules/counter";

function App() {

  const counter = useSelector((state)=> {
    return state.counter;
  });

  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);

  // number state에 잘 들어오고 있는지, 
  // 화면이 렌더링 될 때 작동하는 useEffect를 통해 확인!
  // useEffect(()=> {
  //   console.log("number =>", + number)
  // }, [number]);

  
  // console.log('number =>', number, typeof number) > string

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input 
        type='number' 
        value={number}
        onChange={(event) => {
          const {value} = event.target;
          setNumber(+value);
        }}
        />
      </div>
      

      <button 
      onClick={()=> {
        // dispatch(plusOne());

        dispatch(plusN(number));
        // {number}가아니라 number여야함.
        // {number}는 찍어보면 {number: '3'}

        // >>>>> 실제로는 이렇게 되는 것!
        // dispatch({
        //   type: "counter/PLUS_N",
        //   payload: 3,
        //  }
        //);
      }}
      >
        +
      </button>
      <button onClick={()=>{
        // dispatch(minusOne());

        dispatch(minusN(number));
      }}>
        -
      </button>
    </>
  )
};

export default App;