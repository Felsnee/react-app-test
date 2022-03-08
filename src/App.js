import './App.css';
import React from 'react';
import Header from './Components/Header'; 
import HeaderContent from './Components/HeaderContent'; 
import Navigation from './Components/Navigation'; 
import PrimaryButton from './Components/PrimaryButton'; 
import SecondaryButton from './Components/SecondaryButton'; 
import {OuterLayout} from './styles/Layouts.js';

function App() {
  return (
    <div className="App"> 
 <Header />
<OuterLayout>
</OuterLayout>
    </div>
  );
}

export default App;
