import { Component } from 'react'
import spinner from '../assets/spinner.gif'


export class Spinner extends Component {
  render() {
    return (
      <div className='flex items-center justify-center'>
        <img className='w-12' src={spinner} alt="Spinner" />
      </div>
    )
  }
}

export default Spinner