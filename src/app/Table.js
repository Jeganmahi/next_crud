
import 'bootstrap/dist/css/bootstrap.css'
import getArray from './server/api/data';
import { handleDelete, handleUpdate } from './server/api/create';
export default async  function Table() {
const data = await getArray()
  return (
    <div className='container'>


      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Pass</th>
            <th scope="col"> actions </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => {
                const handleDeleteByid = handleDelete.bind(null,data.id)
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.Pass}</td>
                <td>
                  <form action={handleDeleteByid}>
                  <button className='btn btn-success' > delete</button>
                  </form>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

