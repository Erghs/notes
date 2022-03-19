import React, { Fragment,useContext, useEffect } from 'react'
import { Form } from '../components/Form'
import { Note } from './../components/Note';
import {FirebaseContext} from '../Context/firebase/firebaseContext'
import {Loader} from '../components/Loader'

export const Nodes=()=>{
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])
    return(
    <Fragment>
         {<Form/>}
         <hr />
         {loading
        ? <Loader />
        : <Nodes notes={notes} onRemove={removeNote} />
      }
    </Fragment>
    )
}