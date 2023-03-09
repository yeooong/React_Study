/* component drilling 예제
import React from "react";

const style = {
    color: 'red',
    fontWeight: '700'
}

function Child({houseName, pocketMoney}) {

    console.log(houseName, pocketMoney);
    return <div>
        나는 이 집안의 막내에요! <br />
        할아버지가 우리 집 이름은 <span style={style} >{houseName}</span> 라고 했어요.<br />
        게다가 용돈도 <span style={style} >{pocketMoney}</span> 원 만큼이나 주셨어요!
    </div>
}

export default Child;
 */

/* 
// useContext를 사용하여 관리하기!
import React from "react";
import { FamilyContext } from "../context/FamilyContext";
import { useContext } from "react";

const style = {
    color: 'red',
    fontWeight: '700'
}

function Child() {

    const data = useContext(FamilyContext);
    // console.log(data); >> 잘 내려오는지 확인!

    return <div>
        나는 이 집안의 막내에요! <br />
        할아버지가 우리 집 이름은 <span style={style} >{data.houseName}</span> 라고 했어요.<br />
        게다가 용돈도 <span style={style} >{data.pocketMoney}</span> 원 만큼이나 주셨어요!
    </div>
}

export default Child;

 */