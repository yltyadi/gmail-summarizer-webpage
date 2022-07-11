import './App.css';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='header-div'> 
        <div className='logo'>summarize.me</div>
        <div>
          <a href='https://www.privacypolicygenerator.info/live.php?token=WpnJKcVoaeTkPYGFMseDYVxma11fUwVT' className='privacy-link' target='_blank'>
            Privacy Policy
          </a>
          <a href='https://v5.reactrouter.com/web/guides/quick-start' target='_blank'>
            <button className='header-btn'>Get started</button>
          </a>
        </div>
      </div>
      <div className='main-body'>
        <h1>summarize.me</h1>
        <h3 className='description'>A chrome extension that shortens long emails into concise summaries.</h3>
        <a href='https://v5.reactrouter.com/web/guides/quick-start' target='_blank'>
          <button className='get-started-btn'>Get Started for Free</button>
        </a>
      </div>
      <div className='footer-div'>
        <p>2022 &copy; summarize.me</p>
      </div>
    </div>
  );
}

export default App;
