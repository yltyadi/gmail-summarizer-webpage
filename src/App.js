import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='header-div'>
        <div className='logo'>summarize.me</div>
        <div>
          <a className='privacy-link' href='#'>Privacy Policy</a>
          <button className='header-btn'>Get started</button>
        </div>
      </div>
      <div className='main-body'>
        <h1>summarize.me</h1>
        <h3 className='description'>A chrome extension that shortens long emails into concise summaries.</h3>
        <button className='get-started-btn'>
          <a>Get Started for Free</a>
        </button>
      </div>
      <div className='footer-div'>
        <p>2022 &copy; summarize.me</p>
      </div>
    </div>
  );
}

export default App;
