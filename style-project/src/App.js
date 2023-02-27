// 18강 반복되는 컴포넌트 처리하기(1)

/* import React from 'react';
import './App.css';

function App() {

  const testArr = ['감자', '고구마', '오이', '가지', '옥수수'];

  return (
    <div className='app-style'>
      {
        testArr.filter((item) => {
          return item !== '오이'
        })
          .map((item) => {
            return <div className='component-style'>{item}</div>;
          })
      }
    </div>
  );
};

export default App;
 */







// 19강 반복되는 컴포넌트 처리하기(2)
/* 
import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  const clickAddButtonHandler = (event) => {
    // 1.새로운 형태의 newUser { id: ~, age: ~, name: "~" }, 을 만든다
    // 2.newUser를 배열에 추가한다.
    const newUser = {
      id: users.length +1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  }


  return (
    <div>
      <div>
        이름 :&nbsp;
        <input
          value={name}
          onChange={nameChangeHandler} />
        <br />
        나이 :&nbsp;
        <input
          value={age}
          onChange={ageChangeHandler} />
        <br />
        <button onClick={clickAddButtonHandler}>추가</button>
      </div>
      <div className='app-style'> {
        users.map((item) => {
          return (
            <div key={item.id} className='component-style'>
              {item.age} - {item.name}
            </div>
          )
        })
      }
      </div>
    </div>
  );
};

export default App;
 */





//20강 반복되는 컴포넌트 처리하기(3)
/* 
import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  //추가버튼 클릭
  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length +1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  }

  //x버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  };

  // const clickRemoveButtonHandler = (id) => {
  //   const newUsers = users.filter(function (user) {
  //     return user.id !== id;
  //   });
  //   setUsers(newUsers);
  // }


  return (
    <div>
      <div>
        이름 :&nbsp;
        <input
          value={name}
          onChange={nameChangeHandler} />
        <br />
        나이 :&nbsp;
        <input
          value={age}
          onChange={ageChangeHandler} />
        <br />
        <button onClick={clickAddButtonHandler}>추가</button>
      </div>
      <div className='app-style'> {
        users.map((item) => {
          return (
            <div key={item.id} className='component-style'>
              {item.age} - {item.name}
              <button onClick={() => clickRemoveButtonHandler(item.id)}>x</button>
            </div>
          )
        })
      }
      </div>
    </div>
  );
};

export default App;
 */





// 컴포넌트 파일내에서 분리하기
/* 
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  //추가버튼 클릭
  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  }

  //x버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  };


  return (
    <div>
      <div>
        이름 :&nbsp;
        <input
          value={name}
          onChange={nameChangeHandler} />
        <br />
        나이 :&nbsp;
        <input
          value={age}
          onChange={ageChangeHandler} />
        <br />
        <button onClick={clickAddButtonHandler}>추가</button>
      </div>
      <div className='app-style'>
        {users.map((item) => {
          return (
            <User 
            key={item.id}
            item={item}
            clickRemoveButtonHandler={clickRemoveButtonHandler}
          />
          );

        })}
      </div>
    </div>
  );
};

const User = ({ item, clickRemoveButtonHandler }) => {
  return (

    <div key={item.id} className='component-style'>
      {item.age} - {item.name}
      <button onClick={() => clickRemoveButtonHandler(item.id)}>x</button>
    </div>
  )


}

export default App;
 */






// 20강 파일 자체로 컴포넌트 따로 분리하기
/* 
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  //추가버튼 클릭
  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  }

  //x버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  };


  return (
    <div>
      <div>
        이름 :&nbsp;
        <input
          value={name}
          onChange={nameChangeHandler} />
        <br />
        나이 :&nbsp;
        <input
          value={age}
          onChange={ageChangeHandler} />
        <br />
        <Button clickAddButtonHandler={clickAddButtonHandler} />
      </div>
      <div className='app-style'>
        {users.map((item) => {
          return (
          <User
            key={item.id}
            item={item}
            clickRemoveButtonHandler={clickRemoveButtonHandler}
          />
          );
        })}
      </div>
    </div>
  );
};

const Button = ({ clickAddButtonHandler }) => {
  return <button onClick={clickAddButtonHandler}>추가</button>
}


const User = ({ item, clickRemoveButtonHandler }) => {
  return (

    <div key={item.id} className='component-style'>
      {item.age} - {item.name}
      <button onClick={() => clickRemoveButtonHandler(item.id)}>x</button>
    </div>
  )


}

export default App;
 */




// child연습하기

import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import User from './components/User';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  //추가버튼 클릭
  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  }

  //x버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  };


  return (
    <div>
      <div>
        이름 :&nbsp;
        <input
          value={name}
          onChange={nameChangeHandler} />
        <br />
        나이 :&nbsp;
        <input
          value={age}
          onChange={ageChangeHandler} />
        <br />
        <Button clickAddButtonHandler={clickAddButtonHandler}>추가</Button>
      </div>
      <div className='app-style'>
        {users.map((item) => {
          return (
          <User
            key={item.id}
            item={item}
            clickRemoveButtonHandler={clickRemoveButtonHandler}
          />
          );
        })}
      </div>
    </div>
  );
};

export default App;
