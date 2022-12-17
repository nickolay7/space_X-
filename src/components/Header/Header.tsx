import classNames from "classnames";
import {Container} from "layout/Container";

import "./Header.scss";
import { NavLink } from 'react-router-dom'

interface HeaderProps {
  className?: string
}

export const Header = ({ className = '', ...attrs }: HeaderProps) => {
  const classes = classNames('Header', className);

  const menuLinks = [
    {
      title: 'Главная',
      alias: '/'
    },
    {
      title: 'Технология',
      alias: '/tech'
    },
    {
      title: 'График полетов',
      alias: '/flights'
    },
    {
      title: 'Гарантии',
      alias: '/guarantees'
    },
    {
      title: 'О компании',
      alias: '/about'
    },
    {
      title: 'Контакты',
      alias: '/contacts'
    },
  ]

  const menuItems = menuLinks.map(({ title, alias }) => (
    <li key={alias} className="mr-8">
      <NavLink to={alias}>
        <div className="ui-button isLink">
          {title}
        </div>
      </NavLink>
    </li>
  ))

  return (
    <header className={classes} {...attrs}>
      <Container>
        <div className='flex justify-between Header__wrapper'>
          <div className="Logo">
            <div className="Logo__corner Logo__corner_lt"></div>
            <div className="Logo__corner Logo__corner_rt"></div>
            <div className="Logo__corner Logo__corner_lb"></div>
            <div className="Logo__corner Logo__corner_rb"></div>
            <img src={require('../../assets/img/space_logo.png')} alt="space_x logo"/>
          </div>
          <ul className="MenuList items-center">{menuItems}</ul>
          <div>
            <input id="sandwich_toggle" type="checkbox"/>
            <label className="sandwich_btn" htmlFor="sandwich_toggle">
              <span className="sandwich_items"></span>
            </label>
          </div>
        </div>
      </Container>
    </header>
  );
}
