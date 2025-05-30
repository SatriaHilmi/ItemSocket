import { useState } from 'react'
import './App.css'
import { usePage } from './hooks/UsePage'
import { Navbar } from './component/Navbar';

function App() {
  const { page } = usePage();
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <p>Home Page</p>;
      case 'about':
        return <p>About Page</p>;
      case 'profile':
        return <p>profile</p>;
      default:
        return <p>home</p>;
    }
  };

  return (
    <>
      <Navbar />
      <main className='transtransition-all duration-500 ease-in-out'>{renderPage()}</main>
    </>
  )
}

export default App
