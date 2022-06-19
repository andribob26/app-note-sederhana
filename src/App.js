import React from 'react'
import Header from './components/header'
import BoxInput from './components/boxInput'
import NotesWrapper from './components/notesWrapper'
import Footer from './components/footer'
import { getInitialData } from './utils/index'

class App extends React.Component {
  state = {
    data: getInitialData(),
    dataSearch: [],
    isSearch: false,
  }

  createId = () => {
    return +new Date()
  }

  searchNote = (value) => {
    let result = this.state.data.filter(note => note.title.match(new RegExp(value, "i")))
    if (value === "" || result.length === 0) {
      this.setState({
        data: this.state.data,
        isSearch: false
      })
    } else {
      this.setState({
        dataSearch: result,
        isSearch: true
      })
    }
  }

  deleteNote = id => {
    const index = this.state.data.findIndex(note => {
      return note.id === id
    })
    let arrayData = [...this.state.data]
    arrayData.splice(index, 1);
    this.setState({
      data: arrayData,
    })
  }

  moveNotes = (id) => {
    const arrayData = this.state.data.map(note => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    })

    this.setState({
      data: arrayData,
    })
  }



  addNote = (title, body) => {
    this.setState({
      data: [
        ...this.state.data,
        {
          id: this.createId(),
          title: title,
          body: body,
          archived: false,
          createdAt: new Date()
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <Header searchNote={this.searchNote} />
        <BoxInput addNote={this.addNote} />
        <NotesWrapper
          titleList="Catatan aktif"
          btnText="Arsipkan"
          isArchived={false}
          notes={this.state.isSearch? this.state.dataSearch: this.state.data}
          moveNotes={this.moveNotes}
          deleteNote={this.deleteNote}
        />
        <NotesWrapper
          titleList="Arsip"
          btnText="Pindahkan"
          isArchived={true}
          notes={this.state.isSearch? this.state.dataSearch: this.state.data}
          moveNotes={this.moveNotes}
          deleteNote={this.deleteNote}
        />
        <Footer/>
      </div>
    )
  }
}

export default App
