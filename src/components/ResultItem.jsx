import React from 'react'

export const ResultItem = ({res}) => {
  const {title, extract} = res
  const pageViewValues = Object.values(res?.pageviews || {})
  const highestNumber = Math.max(0, ...pageViewValues)
  
  return (
    <li className="results__item">
      <div className="results__thumbnail">
        {res?.thumbnail ? <img className="results__thumbnail-image" src={res?.thumbnail?.source} alt={title} width={res?.thumbnail?.width} height={res?.thumbnail?.height} /> : <div className="results__thumbnail-placeholder"><svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M368,224c26.5,0,48-21.5,48-48c0-26.5-21.5-48-48-48c-26.5,0-48,21.5-48,48C320,202.5,341.5,224,368,224z"/><path d="M452,64H60c-15.6,0-28,12.7-28,28.3v327.4c0,15.6,12.4,28.3,28,28.3h392c15.6,0,28-12.7,28-28.3V92.3   C480,76.7,467.6,64,452,64z M348.9,261.7c-3-3.5-7.6-6.2-12.8-6.2c-5.1,0-8.7,2.4-12.8,5.7l-18.7,15.8c-3.9,2.8-7,4.7-11.5,4.7   c-4.3,0-8.2-1.6-11-4.1c-1-0.9-2.8-2.6-4.3-4.1L224,215.3c-4-4.6-10-7.5-16.7-7.5c-6.7,0-12.9,3.3-16.8,7.8L64,368.2V107.7   c1-6.8,6.3-11.7,13.1-11.7h357.7c6.9,0,12.5,5.1,12.9,12l0.3,260.4L348.9,261.7z"/></g></svg></div>}
        
        
        <a href="#" className="results__title">{title}</a>
      </div>
      <p className="results__extract">{extract}</p>
      <div className={`results__views results__views--${highestNumber > 2000 ? 'green' : 'red'}`}>
        {highestNumber > 2000 ?
        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="19" y2="5"/><polyline points="5 12 12 5 19 12"/></svg> : <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
      }
        <span> Views: {highestNumber < 1 ? 0 : highestNumber}</span>
      </div>
    </li>
  )
}