import React, { useState } from 'react'

import { Main } from './styles.js'
import { useApp } from '../context/AppContext.jsx'
import { InputAge, InputName, CountUp } from '../components'

export default function App() {
  const { bornDate, name } = useApp()

  const localName = localStorage.getItem('name')
  const localBornDate = localStorage.getItem('borndate')

  console.log(localName, localBornDate)

  return (
    <Main>
      {name || localName ?
        bornDate || localBornDate ?
          <CountUp /> : <InputAge />
        : <InputName />
      }
    </Main>
  )
}
