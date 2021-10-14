import React from 'react'

import Header from './Header/Header'
import TodoList from './TodoList/TodoList'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>My Using Redux Toolkit Example</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
