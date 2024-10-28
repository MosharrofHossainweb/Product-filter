import React, { useState } from 'react'
import bddata from '../../Db/Db'
const Product = () => {
    
// =========variable part=============
const[data,setData]=useState(bddata)
const handelfiter=(brandName)=>{
    const filterData =bddata.filter((item)=>{
        return item.brand ===brandName
    })
    setData(filterData)
}

console.log(bddata)
  return (
    <>
      <section className="product_filter mt-4 bg-slate-700">
        <div className="container">
            <div className="product_btn flex justify-around bg-yellow-700 p-4">
                <button onClick={()=>setData(bddata)} className='text-xl p-1 px-5 rounded-lg hover:bg-slate-400 '>All</button>
                <button onClick={()=>handelfiter('Apple')} className='text-xl p-1 px-5 rounded-lg hover:bg-slate-400 '>Apple</button>
                <button onClick={()=>handelfiter('HP')} className='text-xl p-1 px-5 rounded-lg hover:bg-slate-400 '>Hp</button>
                <button onClick={()=>handelfiter('Lenovo')} className='text-xl p-1 px-5 rounded-lg hover:bg-slate-400 '>Lenevo</button>
                <button onClick={()=>handelfiter('Asus')} className='text-xl p-1 px-5 rounded-lg hover:bg-slate-400 '>Asus</button>
            </div>
            <div className="product_card flex mt-5 flex-wrap gap-5">
                {
                    data.map((item,i)=>(

                <div key={i} className="singleCard w-[400px]  rounded-xl h-[350px] shadow-[-1px_1px_6px_4px_#fcdd2d] gap-4 flex mt-5 mb-10">
                        <div className="card_img w-[250px] pt-9 h-full overflow-hidden bg-slate-300">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="card_text relative ">

                            {
                                item.discount&&
                                <div className="sale  absolute bg-slate-500 px-3 py-1 text-[10px] text-yellow-200 rounded-lg top-1 right-1">
                                    <h2 className='font-semibold'>Sale</h2>
                                </div>
                            }

                            <h2 className='text-2xl text-yellow-400 mt-3 '>{item.brand}</h2>
                            <p className='text-yellow-400 mt-2'>Model: {item.model_number}</p>
                            <ul className='list-disc pl-5 mt-4'>
                                <li className='text-yellow-400'>Ram: {item.ram}</li>
                                <li className='text-yellow-400'>Rom: {item.rom}</li>
                                <li className='text-yellow-400'>Display Size: {item.display_size}</li>
                                <li className='text-yellow-400'>Color: {item.color}</li>
                            </ul>
                            <h2 className='text-yellow-500 mt-5 '>Price: {item.price_in_tk}tk 
                                 <span className='text-green-50 text-[14px] '><br />Discount Price: {item.discount_price}</span>tk </h2>
                        </div>
                </div>
                    ))
                }
            </div>

        </div>
      </section>
    </>
  )
}

export default Product
