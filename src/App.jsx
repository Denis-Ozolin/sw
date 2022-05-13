import {useState, useEffect} from 'react'

import LoadingPage from './components/LoadingPage';
import HomePage from './pages';

const links = [
  {
    id: 1,
    name: 'Перейти до сайту',
    link: 'https://sweetvillage.metro.biz/?lang=uk',
    purpose: 'Подивитись фото нашої продукції'
  },
  {
    id: 2,
    name: 'Перейти у Телеграм',
    link: 'https://t.me/SweetVillage_bot?start=ZGw6OTIxOTc',
    purpose: 'Отримати прайси для співпраці'
  },
  {
    id: 3,
    name: 'Зателефонувати',
    link: 'tel:+380634725349',
    purpose: "Зв'язатись з нами"
  },
];

function App() { 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(!isLoading);
    }, 1000);
      
      return () => clearTimeout(timer);
    },[isLoading]);
  
  return (
    <>
      {!isLoading ? <LoadingPage/>: <HomePage links={links}/>}
    </>
  );
}

export default App;
