import React from 'react'

import projects from '../../personal-info/projects'

const Project = () => {
  return (
    <div
      className='container justify-content-center p-3 rounded-border bg-white mb-4'
      id='projects'
      href='#projects'
    >
      <div className='row m-2 my-3'>
        <div className='col-12'>
          <h3 className='font-weight-bold'>PROJECTS</h3>
          <em>Here are some projects I joined, click for more details</em>
          <div className='accordion' id='accordionExample'>
            {projects.map((project, index) => {
              return (
                <div className='card' key={index}>
                  <div
                    className='card-header'
                    id={'heading' + index}
                    style={{ backgroundColor: '#1e5b75', color: '#ffffff' }}
                  >
                    <a
                      data-toggle='collapse'
                      href={'#collapse' + index}
                      aria-expanded='true'
                      aria-controls={'collapse' + index}
                    >
                      {project.name}
                    </a>
                  </div>
                  <div
                    id={'collapse' + index}
                    className='collapse collapsed'
                    aria-labelledby={'heading' + index}
                    data-parent='#accordionExample'
                  >
                    <div className='card-body'>
                      <h5 className='font-weight-bold'>{project.name}</h5>
                      <em>{project.description}</em>
                      <div className='project-link mt-3'>
                        <h6 className='font-weight-bold'>
                          LINK:{' '}
                          <a className='link' href={project.link}>
                            {project.link}
                          </a>
                        </h6>
                      </div>
                      <div className='project-features mt-3'>
                        <h6 className='font-weight-bold'>FEATURES</h6>
                        <ul>
                          {project.features.map((value, index) => {
                            return <li key={index}>{value}</li>
                          })}
                        </ul>
                      </div>
                      <div className='project-images'>
                        {project.images ? (
                          <h6 className='font-weight-bold'>IMAGES</h6>
                        ) : (
                          <div></div>
                        )}

                        {project.images ? (
                          project.images.map((value, index) => {
                            return (
                              <figure className='figure' key={index}>
                                <img
                                  src={value.link}
                                  className='figure-img img-fluid rounded'
                                  alt={value.title}
                                />
                                <figcaption
                                  className='figure-caption text-center'
                                  style={{ color: '#000000' }}
                                >
                                  {value.title}
                                </figcaption>
                              </figure>
                            )
                          })
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
