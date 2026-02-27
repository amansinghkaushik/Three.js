import React from 'react'
import { navLinks } from '../constants/index.js'

function Navbar() {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="apple-logo" />

            <ul>
                {navLinks.map(({label}) => (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>

            <div>
                <button>
                    <img src="/search.svg" alt="search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar