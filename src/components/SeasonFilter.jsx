const seasons = ['all', 'spring', 'summer', 'fall', 'winter']

function SeasonFilter({ activeSeason, setActiveSeason }) {
  return (
    <div className="flex gap-2 flex-wrap justify-center items-center m-6">
      {seasons.map((season) => (
        <button
          key={season}
          onClick={() => setActiveSeason(season)}
          aria-pressed={activeSeason === season}
          className={`font-body text-xs uppercase tracking-wide rounded-full px-3 py-1 border transition-colors capitalize ${
            activeSeason === season
              ? 'bg-accent text-text border-accent'
              : 'text-accent border-accent/40 hover:border-accent'
          }`}
        >
          {season}
        </button>
      ))}
    </div>
  )
}

export default SeasonFilter
