import './Task.css'

export function Task({desc}:{desc:string}){
    return(
        <>
            <div  className={'p-2 Task'}>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        {desc}
                    </label>
                </div>
            </div>

        </>
    )
}