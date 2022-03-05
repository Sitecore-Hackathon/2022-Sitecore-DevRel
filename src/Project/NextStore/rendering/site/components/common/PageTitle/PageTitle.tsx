import { FC } from 'react'
import s from './PageTitle.module.css'

interface TitleProps {
  text?: String
}

const PageTitle: FC<TitleProps> = ({ text }) => (
  <h1 className={s.title}>{text}</h1>
)

export default PageTitle