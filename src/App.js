import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import ExpireAPIkey from './components/ExpireAPIkey';
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  // componentDidCatch(error, errorInfo) {
  //   console.error("Error caught by componentDidCatch:", error, errorInfo);
  //   this.setState({ hasError: true });
  // }

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  apiKey = process.env.REACT_APP_NEWS_API

  render() {
    // if (this.state.hasError) {
    //   return <div><ExpireAPIkey /></div>
    // }

    return (
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={this.state.progress} />
        <Routes>
          <Route path="/" element={<Navigate to="/general" />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" category="general" />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" category="business" />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" category="sports" />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" category="health" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" category="technology" />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" category="science" />} />

          <Route exact path="/in" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="in" country="in" />} />
          <Route exact path="/ru" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="ru" country="ru" />} />
          <Route exact path="/jp" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="jp" country="jp" />} />
          <Route exact path="/au" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="au" country="au" />} />
          <Route exact path="/us" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="us" country="us" />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
