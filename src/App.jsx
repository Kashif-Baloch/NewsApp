import { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (prog) => {
    this.setState({ progress: prog })
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='red'
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="technology" pageSize={21} country='us' category='technology' />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={21} country='us' category='business' />} />
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={21} country='us' category='entertainment' />} />
          <Route exact path='/general' element={<News setProgress={this.setProgress} key="general" pageSize={21} country='us' category='general' />} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={21} country='us' category='health' />} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={21} country='us' category='science' />} />
          <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={21} country='us' category='sports' />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App