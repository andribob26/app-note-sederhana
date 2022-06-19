import React from 'react'

export const CardNote = ({
    id,
    title,
    body,
    createdAt,
    btnText,
    moveNotes,
    deleteNote
}) => {
    const moveNotesHandler = () => {
        moveNotes(id)
    }
    const deleteHandler = () => {
        deleteNote(id)
    }
    return (
        <div id={id} className='card-note'>
            <article>
                <div className='card-content'>
                    <h1>{title}</h1>
                    <p>{createdAt}</p>
                    <br />
                    <p>{body}</p>
                </div>
                <div className='card-bottom'>
                    <button onClick={moveNotesHandler}>{btnText}</button>
                    <button onClick={deleteHandler}>Hapus</button>
                </div>
            </article>
        </div>
    )
}

// class CardNote extends React.Component {

//     moveNotesHandler = () => {
//         this.props.moveNotes(this.props.id)
//     }
//     deleteHandler = ()=>{
//         this.props.deleteNote(this.props.id)
//     };
//     render() {
//         const {id, title, body, createdAt, btnText} = this.props
//         return (
//             <div  id={id} className="card-note">
//                 <article>
//                     <div className="card-content">
//                         <h1>{title}</h1>
//                         <p>{createdAt}</p>
//                         <br />
//                         <p>{body}</p>
//                     </div>
//                     <div className='card-bottom'>
//                         <button onClick={this.moveNotesHandler}>{btnText}</button>
//                         <button onClick={this.deleteHandler}>Hapus</button>
//                     </div>
//                 </article>
//             </div>
//         )
//     }
// }

export default CardNote
