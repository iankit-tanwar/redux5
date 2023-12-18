import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import changeToA from './redux/actioncreator/actionCreators';

export default function AnotherComponent() {

     let x =  useSelector((state)=>{
        return state
     });

     const dispatch =  useDispatch();
    return (
        <>
            <div>AnotherComponent</div>
              {x.fname}
            <button onClick={()=>{dispatch(changeToA())}}>click me</button>
          
        </>
    )
}
