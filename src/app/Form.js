import 'bootstrap/dist/css/bootstrap.css'
import { submitForm } from './server/api/create'
export default function Form() {


    return (
        <div className='container'>
            <form action={submitForm}>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name='pass' rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Success</button>
            </form>
        </div>
    )
}
