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
  return (
    <HomePage links={links}/>
  );
}

export default App;
