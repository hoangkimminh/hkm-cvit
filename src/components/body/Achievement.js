import React from 'react'

import achievements from '../../personal-info/achievements'

const Achievement = () => {
  return (
    <div
      className='container justify-content-center content  p-3 rounded-border bg-white'
      id='achievements'
      href='#achivements'
    >
      <div className='row m-2 my-3'>
        <div className='col-12'>
          <h3 className='font-weight-bold'>ACHIEVEMENTS</h3>
          {achievements.map((value, index) => {
            return (
              <div className='row mb-3' key={index}>
                <div className='col-12 col-md-5 timeline'>
                  <h5 className='font-weight-bold'>{value.time}</h5>
                </div>
                <div className='col-12 col-md-7 border-left'>
                  <h5 className='font-weight-bold'>{value.position}</h5>
                  <p className='pl-2 text-muted'>{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Achievement
