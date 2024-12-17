import React from 'react'
import { useFetch } from "../hooks/useFetch"

export const FetchApp = () => {

  const { data, isLoading, error, fetchData } = useFetch()
  return (
    <>
      <h2>Lista de usuarios : </h2>

      {isLoading ? <h4>Cargando...</h4>
        : error ? <h4>Ha ocurrido un error: {error}</h4>
          :
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Mail</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {

                data.map(user => {
                  return (
                    <tr key={user.id}>
                      <th scope="row">{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                    </tr>
                  )

                })
              }
            </tbody>
          </table>
      }
    </>
  )
}
