import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function ApiService({service}){
    if (service.router == 0 ) return
    const [, ...newArray] = service.router ;
    return (
        <React.Fragment >
            <tr id={service.id.toLowerCase()}>
              <td rowSpan={service.router.length}>{service.service}</td>
              <td>{service.router[0].url}</td>
              <td className={service.router[0].method.toLowerCase()}>{service.router[0].method}</td>
              <td>
                {service.router[0].request.map(ele =>{
                  return(
                    <React.Fragment>
                     <strong>{ele.type}</strong><br/>
                      {ele.detail} <br/>
                    </React.Fragment>
                  )
                })}
              </td>
              <td>
                {service.router[0].response.map(ele =>{
                    return(
                      <React.Fragment>
                       <strong>{ele.type}</strong> <br/>
                        {ele.detail}
                      </React.Fragment>
                    )
                  })}
              </td>
              <td>
                {service.router[0].description}
              </td>
            </tr>
            {newArray.map(ele =>{
              return (
                <tr>
                  <td>{ele.url}</td>
                  <td className={ele.method.toLowerCase()}>{ele.method}</td>
                  <td>
                    {ele.request.map(ele =>{
                      return(
                        <React.Fragment>
                          <strong>{ele.type}</strong><br/>
                          {ele.detail} <br/>
                        </React.Fragment>
                      )
                    })}
                  </td>
                  <td>
                    {ele.response.map(ele =>{
                        return(
                          <React.Fragment>
                            <strong>{ele.type}</strong><br/>
                            {ele.detail} <br/>
                          </React.Fragment>
                        )
                      })}
                  </td>
                  <td>
                    {ele.description}
                  </td>
                </tr>
              )
            })}
        </React.Fragment>
    )
}
function Api({array}){
    return (
      <div style={{overflowX:"auto"}}>
        <table className="custom-table">
          <thead>
            <tr>
              <th className="service">service</th>
              <th className="url">url</th>
              <th className="method">Method</th>
              <th className="request">request</th>
              <th className="request">response</th>
              <th className="description">description</th>
            </tr>
          </thead>
          <tbody>
            {
              array.map(ele =>{
                return (
                  <ApiService service = {ele}></ApiService>
                ) 
              })
            }
          </tbody>
        </table>
      </div>
      )
}
export default function TableAPI({Project}) {
  return (   
    <React.Fragment> 
        
        <React.Fragment>
          <div
              id= "container"
              className='border-shadow' 
              style={{
                width: "90%",
                margin: "0 auto",  
                display: "flex",
                flexDirection: "column",
              }}>
            <h3><strong>{Project.name}:</strong> {Project.description}</h3>
            <p><strong>Language</strong> {Project.language}</p>
            <p><strong>Technology</strong> {Project.technology.map( (ele, index) => {return (
                                                                                      <React.Fragment>
                                                                                        {ele}
                                                                                        {index < Project.technology.length - 1 ? ', ' : ''}
                                                                                      </React.Fragment>
                                                                                    )})}
            </p>
            <p>
                {Project.description}
                <Api array={Project.api}></Api>
            </p>
        </div>
        </React.Fragment>
    </React.Fragment>
  )
}
