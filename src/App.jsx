import { useState } from 'react'
import SearchInput from './components/SearchInput'
import ResultList from './components/ResultList'
import { useDebounce } from './hooks/useDebounce'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedValue = useDebounce(searchQuery, 1000)
  
  return (
    <main className="main">
      <div className="wrapper">
        <header className="header">
          <div className="header__inner">
            <h1 className="header__title"><svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path d="M36.34,20.44a2.09,2.09,0,0,1,0,2.08L34.54,25.9a.38.38,0,0,0,0,.33l.4.95a.37.37,0,0,0,.67,0l2.77-5.08a5.23,5.23,0,0,1,4.58-2.71h0a.52.52,0,0,0,.52-.53V18.3a.52.52,0,0,0-.52-.52h-7.7a.6.6,0,0,0-.6.61v.52a.6.6,0,0,0,.45.58A2.05,2.05,0,0,1,36.34,20.44Z"/><path class="cls-2" d="M55.69,17.78H46.94a.82.82,0,0,0-.82.82h0a.82.82,0,0,0,.82.82H47a2.15,2.15,0,0,1,1.85,1,2.1,2.1,0,0,1,.05,2.1L38.63,41.4,34,30.23v0l-.91-2.08v0l-2.73-6.52A1.54,1.54,0,0,1,30.55,20a1.6,1.6,0,0,1,1.26-.58h0a.19.19,0,0,0,.19-.19V18a.19.19,0,0,0-.19-.19H22.89a.69.69,0,0,0-.68.68v.42a.68.68,0,0,0,.54.66,5.41,5.41,0,0,1,3.83,3.19l4.21,10.05-4.7,8.62-8.3-19.81A1.54,1.54,0,0,1,18,20a1.6,1.6,0,0,1,1.26-.58h0a.3.3,0,0,0,.3-.31v-1a.3.3,0,0,0-.3-.31H8.82A.82.82,0,0,0,8,18.6H8a.82.82,0,0,0,.82.82h.23a5.4,5.4,0,0,1,5,3.31l9.57,22.83a1.08,1.08,0,0,0,1,.66,1.05,1.05,0,0,0,.94-.56l1.25-2.29,4.77-8.76,4.59,11a1.08,1.08,0,0,0,1,.66,1.05,1.05,0,0,0,.94-.56l1.25-2.29L50.9,22.13a5.23,5.23,0,0,1,4.58-2.71h.21A.31.31,0,0,0,56,19.1v-1a.31.31,0,0,0-.31-.32Z"/><polygon points="31.56 34.61 30.43 31.92 30.79 32.78 29.52 35.1 30.31 36.91 31.56 34.61"/></svg> ikipedia Search</h1>
            <div className="header__search">
              <div className="header__icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M20.56,18.44l-4.67-4.67a7,7,0,1,0-2.12,2.12l4.67,4.67a1.5,1.5,0,0,0,2.12,0A1.49,1.49,0,0,0,20.56,18.44ZM5,10a5,5,0,1,1,5,5A5,5,0,0,1,5,10Z" /></svg>
              </div>
              <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
          </div>
        </header>
        <section className="section-results">
          <ResultList searchQuery={debouncedValue} />
        </section>
      </div>
    </main>
  )
}

export default App
