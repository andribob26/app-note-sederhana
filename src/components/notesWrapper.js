import React from 'react'
import CardNote from '../components/cardNote'
import { showFormattedDate } from '../utils/index'


const NotesWrapper = ({
    titleList,
    isArchived,
    btnText,
    moveNotes,
    deleteNote,
    notes
}) => {
    let list;
    const archivedFilter = (data) => {
        const filterResult = data.filter(note => {
            return note.archived === isArchived
        })

        return filterResult
    }

    if (archivedFilter(notes).length === 0) {
        list = <div className="empity-list"><p>Tidak ada catatan...</p></div>
    } else {
        list = archivedFilter(notes).map(note => {
            if (note.archived === isArchived) {
                return (
                    <CardNote
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        body={note.body}
                        createdAt={showFormattedDate(note.createdAt)}
                        btnText={btnText}
                        moveNotes={moveNotes}
                        deleteNote={deleteNote}
                    />
                )
            }
        })
    }








    return (
        <div className='notes-wrapper'>
            <h1>{titleList}</h1>
            <div className='card-list'>
                {list}
            </div>
        </div>
    )
}

export default NotesWrapper

// class NotesWrapper extends React.Component {
//     render() {
//         const { titleList, isArchived, btnText, moveNotes, deleteNote } = this.props
//         const filterResult = this.props.notes.filter(note => {
//             return note.archived === isArchived
//         })
//         return (

//     )
//     }
// }

// export default NotesWrapper
