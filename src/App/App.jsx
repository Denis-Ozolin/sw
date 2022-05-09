import Button from '../components/Button';
import css from './App.module.css';

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
    <div className={css.app}>
      <div className={css.container}>
        <h1 className={css.title}>Sweet Village</h1>
        <p className={css.description}>Київське кондитерське виробництво</p>
        <ul className={css.itemsContainer}>
          {links.map(({id, name, link, purpose}) => 
            <li key={id} className={css.item}>
              <p className={css.purpose}>{purpose}</p>
              <Button name={name} link={link}/>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
