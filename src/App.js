import React, { useState, useEffect } from 'react'
import {createPerson, initialisePersons} from './reducers/personReducer'
import {createNote, initialiseNotes} from './reducers/resourceReducer'
import { connect, useDispatch } from 'react-redux'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const resetValue = () => {
    setValue('')
  }
  return {
    type,
    value,
    onChange,
    resetValue,
  }
}

const App = (props) => {
  const content = useField('text')
  const name = useField('text')
  const number = useField('text')

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initialisePersons())
        dispatch(initialiseNotes())
    }, [dispatch])

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    props.createNote({content: content.value})
    content.resetValue()
  }
 
  const handlePersonSubmit = (event) => {
    event.preventDefault()
    props.createPerson({
        name: name.value,
        number: number.value
    })
    name.resetValue()
    number.resetValue()
  }

  return (
    <div>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...content} />
        <button type='submit'>create</button>
      </form>
      {props.notes.map(n => <p key={n.id}>{n.content}</p>)}

      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...name} /> <br/>
        number <input {...number} />
        <button>create</button>
      </form>
      {props.persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        notes: state.resources,
        persons: state.persons,
    }
}

const mapDispatchToProps = {
    createNote, createPerson, initialiseNotes, initialisePersons
}

export default connect(mapStateToProps, mapDispatchToProps)(App)