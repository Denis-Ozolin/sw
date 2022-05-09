import css from './Button.module.css';

function Button({name, link}) {
  return (
      <a href={link} className={css.link} target="_blank" rel="noreferrer">
        {name}
      </a>
  )
}

export default Button;