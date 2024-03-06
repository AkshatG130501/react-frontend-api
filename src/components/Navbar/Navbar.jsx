import React from 'react'
import {Button, Container, Logo} from "../index";


const Navbar = () => {
    const navItems = [
        {name: 'Crypto Taxes',slug: '/cryptoTaxes', active: true},
        {name: "Free Tools", slug: '/freeTools', active: true},
        {name: 'Resource Center', slug: '/resourceCenter', active: true},
      ]
    
      return (
        <header className='py-3 shadow-lg '>
          <Container>
            <nav className='flex'>
              <div className='mr-4'>
                  <Logo width="70px" />
              </div>
              <ul className='flex ml-auto'>
                {navItems.map((item)=> 
                item.active ? (<li key={item.name}>
                  <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={()=> navigate(item.slug)}>{item.name}</button>
                </li>):null)}
                  <li><Button>Get Started</Button></li>
              </ul>
            </nav>
          </Container>
        </header>
      )
    }

export default Navbar