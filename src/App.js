import React, { useEffect } from 'react'
import { Pages } from './components/Pages';
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
