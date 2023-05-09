import React from 'react'
import './Product.scss'
import { useState } from 'react'
const Product = () => {
    const [name,setName]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("");
    const [prices,setPrices]=useState([]);
    const [use,setUse]=useState("")
    const [side,setSide]=useState("")
    const [precaution,setPrecaution]=useState("")
    const [direction,setDirection]=useState([])
    const [storage,setStorage]=useState("")
    const [Dosage,setDosage]=useState([])
    const [image,setImage]=useState("");
  return (
        <div className="add-product-container ">
        <div className="row m-3">
            <div className="col-12 ">
                <div className="card shadow mb-3">
                    <div className="card-body">
                    <p className="heading text-center">Add New Product</p>
     <form action="">
        <div>
      <label htmlFor="">Name:</label>
      <input type="text"  className="form-control" value={name} onChange={e => setName(e.target.value)}  />
      </div>
     
      <div>
      <label htmlFor="">Category:</label>
      <input type="text"  className="form-control" value={category} onChange={e => setCategory(e.target.value)} />
      </div>
     
      <div>
      <label htmlFor="">MRP:</label>
      <input type="text"  className="form-control" value={price} onChange={e => setPrice(e.target.value)} />
      </div>
      
      <div>
      <label htmlFor="">Price:</label>
      <input type="text"  className="form-control" value={prices} onChange={e => setPrices(e.target.value)}  />
      </div>
     
      <div>
      <label htmlFor="">Use:</label>
      <input type="text"  className="form-control" value={use} onChange={e => setUse(e.target.value)}  />
      </div>
     
      <div>
      <label htmlFor="">Sideof:</label>
      <input type="text"  className="form-control" value={side} onChange={e => setSide(e.target.value)}  />
      </div> 
      <div>
      <label htmlFor="">Precaution:</label>
      <input type="text"  className="form-control" value={precaution} onChange={e => setPrecaution(e.target.value)}  />
      </div>
     
      <div>
      <label htmlFor="">Direction:</label>
      <input type="text"  className="form-control"  value={direction} onChange={e => setDirection(e.target.value)}  />
      </div>
    
      <div>
      <label htmlFor="">Storage:</label>
      <input type="text"  className="form-control" value={storage} onChange={e => setStorage(e.target.value)}  />
      </div>
     
      <div>
      <label htmlFor="">Dosage:</label>
      <input type="text"  className="form-control" value={Dosage} onChange={e => setDosage(e.target.value)}  />
      </div>
     
      <div>
      <label htmlFor=""> Upload Image:</label>
      <input type="file"   className="form-control" value={image} onChange={e => setImage(e.target.value)}  />
      </div>
     </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Product