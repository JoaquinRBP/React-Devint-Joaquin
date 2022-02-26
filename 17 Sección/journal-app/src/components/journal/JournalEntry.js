import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div 
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://www.geekmi.news/__export/1618596849924/sites/debate/img/2021/04/16/solo_crop1618596776153.jpg_976912859.jpg)'
        }}
      >
      </div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un nuevo día
        </p>
        <p className="journal__entry-content">
        Solo Leveling, es una WebNovel y un Webtoon de Corea del Sur escritos por Chugong.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>26</h4>
      </div>
    </div>
  )
}
