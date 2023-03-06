import React from 'react'


export default function Form() {
   
  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold pb-4 text-xl'>Transaction</h1>
        <form id='form' >
            <div className='grid gap-4'>
                <div className='input-group'>
                    <input type="text" placeholder='Sallary,House Rent,SIP' className='mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm'/>
                </div>
                <select className='mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm'>
                    <option value="Investment" default Value>Investment</option>
                    <option value="Expense" default Value>Expense</option>
                    <option value="Savings" default Value>Savings</option>
                </select>
                <div className='input-group'>
                    <input type="text" placeholder='Amount' className='mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm'/>
                </div>
             <div className='submit-btn'>
                 <button className='border border-solid py-2 text-white bg-indigo-500 w-full rounded-xl hover:bg-black'>Make Transaction</button>
             </div>
             </div>
        </form>
    </div>
  )
}
