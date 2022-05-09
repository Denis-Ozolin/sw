import Button from '../components/Button';
import css from './App.module.css';

const links = [
  {
    id: 1,
    name: 'Перейти до сайту',
    link: 'https://sweetvillage.metro.biz/?lang=uk',
    description: 'Подивитись фото нашої продукції'
  },
  {
    id: 2,
    name: 'Перейти у Телеграм',
    link: 'https://t.me/SweetVillage_bot?start=ZGw6OTIxOTc',
    description: 'Отримати прайси для співпраці'
  },
  {
    id: 3,
    name: 'Зателефонувати',
    link: 'tel:+380634725349',
    description: "Зв'язатись з нами"
  },
];

function App() {
  return (
    <div className={css.app}>
      <div className={css.container}>
        <ul className={css.itemsContainer}>
          {links.map(({id, name, link, description}) => 
            <li key={id} className={css.item}>
              <p className={css.description}>{description}</p>
              <Button name={name} link={link}/>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
