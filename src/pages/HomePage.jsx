import css from './HomePage.module.css';
import Button from '../components/Button';

function Home({links}) {
  return (
    <div className={css.wrapper}>
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
  )
}

export default Home