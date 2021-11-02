import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './styles/style.scss'
import { useState } from 'react';

function App() {
  
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Header isLogin = { isLogin }/>
      <Main isLogin={ isLogin } setIsLogin={ setIsLogin }/>
      <Footer />
    </>
  );
}

export default App;
