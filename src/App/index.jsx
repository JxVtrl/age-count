import React, { useEffect, useState, useRef } from 'react'
import { Main } from './styles.js'
import { useApp } from '../context/AppContext.jsx'
import { Input, CountUp } from '../components'

export default function App() {
  const { inputFilled } = useApp()
  return (
    <Main>
      {inputFilled ? <CountUp /> :  <Input />}
    </Main>
  )
}
