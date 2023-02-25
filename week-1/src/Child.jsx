/* 
import React from 'react'

function Child(props) {
  console.log(props); //{age: 21, name: 'test', children: '이름'}
  return <div>Child</div>
}

export default Child; 
*/

// 구조분해할당으로 props 찢어 넣기 >> 명시적으로 알 수 있다!
/* 
import React from 'react'

function Child({age, name, children}) {
    console.log(age); //21  
    console.log(name); //test
    console.log(children); //이름
  return <div>Child</div>
}

export default Child 
*/

/* 
import React from 'react'

function Child({age, name, children}) {
    console.log(age); //undefined
    console.log(name); //test
    console.log(children); //이름
  return <div>Child</div>
}

Child.defaultProps={
    age: '기본 나이',
};

export default Child;

 */