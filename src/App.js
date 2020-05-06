import React from 'react';
import './App.css';
import {Header,SectionA,SectionB, SectionC,SectionD,SectionE,Footer} from './components/index'
function App() {
  return (
    <div className="App">
      <Header/>
      <SectionA/>
      <SectionB/>
      <SectionC/>
      <SectionD/>
      <SectionE/>
      <Footer/>
    </div>
  );
}
export default App;
