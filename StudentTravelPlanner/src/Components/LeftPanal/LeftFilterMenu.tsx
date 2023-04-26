import React from 'react'

function LeftFilterMenu() {
  return (
    <div className='flex-1'>
        <div>
          <div className='font-extrabold text-3xl'>Filter</div>
          <div className='text-gray-500'>Found 100 Colleges</div>
        </div>

        <br />

        <div className='mt-5 border p-5 rounded-lg'>
          <div className='font-extrabold text-xl'>
              Course
          </div>
          <br />
          <div className='h-40 overflow-y-scroll scrollbar-style-light'>
          {
            [...new Array(10).fill(1)].map((val, index) => {
              return (<div className='text-gray-500 flex justify-start items-center h-10'>
              <input type="checkbox" value="Male" name="gender" />  <div className='ml-2'>BSC IT (21)</div>
            </div>)
            })
          }
          </div>
        </div>

          <br />
        <div className='mt-5 border p-5 rounded-lg'>
          <div className='font-extrabold text-xl'>
              State
          </div>
          <br />
          <div className='h-40 overflow-y-scroll scrollbar-style-light'>
          {
            [...new Array(10).fill(1)].map((val, index) => {
              return (<div className='text-gray-500 flex justify-start items-center h-10'>
              <input type="checkbox" value="Male" name="gender" />  <div className='ml-2'>Airoli (21)</div>
            </div>)
            })
          }
          </div>
        </div>

        <br />
        <div className='mt-5 border p-5 rounded-lg'>
          <div className='font-extrabold text-xl'>
              City
          </div>
          <br />
          <div className='h-40 overflow-y-scroll scrollbar-style-light'>
          {
            [...new Array(10).fill(1)].map((val, index) => {
              return (<div className='text-gray-500 flex justify-start items-center h-10'>
              <input type="checkbox" value="Male" name="gender" />  <div className='ml-2'>Airoli (21)</div>
            </div>)
            })
          }
          </div>
        </div>
    </div>
  )
}

export default LeftFilterMenu