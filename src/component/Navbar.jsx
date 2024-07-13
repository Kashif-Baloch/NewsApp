import { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div className='fixed w-[100%] bg-white top-0'>
                <header className="text-gray-600 body-font shadow-lg">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
                        <Link to='/' className="flex title-font font-medium items-center text-pink-500 mb-4 md:mb-1 justify-center">
                            <h1 className='text-pink-500 text-xl font-bold'>NewsMonkey</h1>
                        </Link>
                        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                            <Link to='/business' className="mr-5 hover:text-pink-500 cursor-pointer">Business</Link>
                            <Link to='/entertainment' className="mr-5 hover:text-pink-500 cursor-pointer">Entertainment</Link>
                            <Link to='/general' className="mr-5 hover:text-pink-500 cursor-pointer">General</Link>
                            <Link to='/health' className="mr-5 hover:text-pink-500 cursor-pointer">Health</Link>
                            <Link to='/science' className="mr-5 hover:text-pink-500 cursor-pointer">Science</Link>
                            <Link to='/sports' className="mr-5 hover:text-pink-500 cursor-pointer">Sports</Link>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navbar