function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L12 22M12 2L8 6M12 2L16 6M12 22L8 18M12 22L16 18M2 12L22 12M2 12L6 8M2 12L6 16M22 12L18 8M22 12L18 16" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="logo-text">liquar.space</span>
          </div>
          <div className="nav-buttons">
            <button className="btn-login">Войти</button>
            <button className="btn-register">Зарегистрироваться бесплатно</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App
