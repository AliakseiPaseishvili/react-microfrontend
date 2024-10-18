import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import { Layout } from './components/Layout'

const App = () => 
  <main>
    <h1 className='text-4xl font-bold'>Microfrontend task</h1>
    <Layout />
  </main>


const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)