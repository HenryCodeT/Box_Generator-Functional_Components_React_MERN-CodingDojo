import React,{useState} from 'react';

const ColorForm = (props) => {

    const initialBox = {
        backgroundColor:'',
        width:'',
        height:''
    }

    const [box, setBox] = useState(initialBox)

    const handleOnChange = (e) =>{
        setBox({
            ...box,
            [e.target.name]:e.target.value
        })
    } 

    const createNewColor = (e) => {
        e.preventDefault();
        if (box.backgroundColor && box.height && box.width) {
            props.newBox(box) 
            setBox(initialBox);      
        }
    }
    return(
        <div className='col-5 mx-auto'>
            <form onSubmit={createNewColor}>
                <div className="form-group">
                    <label className="form-label" htmlFor="backgroundColor">Color</label>
                    <input className="form-control" onChange={handleOnChange} type="text" name="backgroundColor" value={box.backgroundColor}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="width">Ancho</label>
                    <input className="form-control" onChange={handleOnChange} type="number" name="width" value={box.width}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="height">Alto</label>
                    <input className="form-control" onChange={handleOnChange} type="number" name="height" value={box.height}/>
                </div>
                <button className='btn btn-warning' type='submit' >Crear</button>
            </form>
        </div>
    );
}
export default ColorForm;