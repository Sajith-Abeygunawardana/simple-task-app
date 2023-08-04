import './Task.css'

export function Task({desc}:{desc:string}){
    return(
        <>
            <div  className={'p-2 Task'}>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value=""/>
                        {desc}
                    </label>
                </div>
            </div>

        </>
    )
}