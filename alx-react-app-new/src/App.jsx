import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import custom components
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* New components */}
      <Header />
      <MainContent />

      {/* Existing WelcomeMessage component */}
      <WelcomeMessage />

       {/* User Profiles */}
       <UserProfile name="Alice" age="25" bio="Loves hiking and photography." />
       <UserProfile name="Brian" age="28" bio="Front-end developer learning React at ALX." />

      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
         <Footer />
    </>
  )
}

export default App
