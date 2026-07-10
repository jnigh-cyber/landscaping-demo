import {useState} from 'react'

const seasons = ['all','summer', 'spring', 'fall', 'winter']

function SeasonFilter({activeSeason, setActiveSeason}) {
  return (
    <>
      <div>
        {seasons.map((season) => (
          <button
            key={season}
            onClick={() => setActiveSeason(season)}
            className={activeSeason === season ? 'font-bold' : ''}
          >
            {season}
          </button>
        ))}
      </div>
    </>
  )
}

export default SeasonFilter