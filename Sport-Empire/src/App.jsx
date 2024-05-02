import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home/Home'


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; {new Date().getFullYear()} My Fitness Site. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
