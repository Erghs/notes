import React, { Fragment } from 'react'
import { Form } from '../components/Form'
import { Note } from './../components/Note';

export const Nodes=()=>{
    const notes=new Array(3)
    .fill('')
    .map((_,i)=>({id:1,title:`Note ${i+1}`}))
    return(
    <Fragment>
         {<Form/>}
         <hr />
         {<Note notes={notes}/>}
    </Fragment>
    )
}