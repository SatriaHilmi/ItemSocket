// import { useState } from 'react'
import './App.css'
import { usePage } from './hooks/UsePage'
import { Navbar } from './component/Navbar';
import { HomePage } from './component/pages/HomePage';
import { UseHasHydrated } from './hooks/UsePage';
import { Profile } from './component/pages/Profile';
import { Project } from './component/pages/Project';
// import { useNavbar } from './hooks/useNavbar';

function App() {
  const { page } = usePage();
  const hasHydrated = UseHasHydrated();
  if (!hasHydrated) {
    return <div className='text-center mt-10 text-gray-500'>Loading...</div>;
  }

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'project':
        return <Project />;
      case 'profile':
        return <Profile />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Navbar />
      <main className='transition-all duration-500 ease-in-out'>{renderPage()}</main>
    </>
  )
}

export default App
