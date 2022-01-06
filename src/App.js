import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './styles/style.scss'
import { useEffect } from 'react';
import { getChar } from './redux/reducers/def_char_reducer';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChar())
  })

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
