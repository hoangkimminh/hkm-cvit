import React from 'react'
import ProgressBar from '../progressbar/ProgressBar'
import CircleProgressBar from '../progressbar/CircleProgressBar'

import skills from '../../personal-info/skills'

const Skill = () => {
  return (
    <div
      className='container justify-content-center content p-3 rounded-border bg-white'
      id='skill'
      href='#skill'
    >
      <div className='row m-2 my-3'>
        <div className='col-12 col-md-5'>
          <h3 className='font-weight-bold'>SKILLS</h3>
          <div className='row d-flex justify-content-around text-center my-3'>
            {skills.circleProgress.map((value, index) => {
              return (
                <div className='col-5' key={index}>
                  <CircleProgressBar
                    content={value.content}
                    percentage={value.percentage}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className='col-12 col-md-7 mt-3'>
          {skills.straightProgress.map((skill, i) => {
            return (
              <ProgressBar content={skill.content} percentage={skill.percentage} key={i} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skill
