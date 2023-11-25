import React from 'react'
import Navigation from './Navigation/Navigation'

import logo from '../../img/logo.png'
import './Header.css'

const navigation = ['Все курсы','Программа','Преподаватели','Отзывы','Цены']
export default function Header() {
  return (
    <header className='header'>
        <img className='header-img' src={logo}></img>
        <Navigation navigation = { navigation }/>
        <button className='header-button'>{'Забронировать место'}</button>
    </header>
  )
}
