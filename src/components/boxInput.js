import React from 'react'

class BoxInput extends React.Component {
  state = {
    inputTitle: '',
    inputBody: '',
    karakter: 0
  }

  resetInput = () => {
    this.setState({
      inputTitle: '',
      inputBody: '',
      karakter: 0
    })
  }

  inputHandleChange = e => {
    if (e.target.value.length <= 50) {
      this.setState({
        karakter: e.target.value.length,
        [e.target.name]: e.target.value
      })
    }
  }
  buttonReset = e => {
    e.preventDefault()
    this.resetInput()
  }
  submitNote = e => {
    e.preventDefault()
    console.log('jalankannnn')
    this.props.addNote(this.state.inputTitle, this.state.inputBody)
    this.resetInput()
  }
  render () {
    return (
      <div className='box-input'>
        <p>{this.state.karakter}/50</p>
        <form onSubmit={this.submitNote}>
          <input
            onChange={this.inputHandleChange}
            value={this.state.inputTitle}
            name='inputTitle'
            maxLength={50}
            type='text'
            placeholder='Ini adalah judul...'
            required
          />
          <textarea
            onChange={this.inputHandleChange}
            value={this.state.inputBody}
            type='text'
            name='inputBody'
            rows='5'
            placeholder='Tuliskan catatanmu di sini...'
            required
          ></textarea>
          <div className='btn-submit'>
            <button onClick={this.buttonReset} type='submit'>
              Reset
            </button>
            <button type='submit'>Buat</button>
          </div>
        </form>
      </div>
    )
  }
}

export default BoxInput
