import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5
      onClick={() => {
        props.setWaitingForDriver(false);
      }}
      className=" mb-2 text-center "
    >
      <i className="ri-arrow-down-wide-line"></i>
    </h5>

     <div className='flex items-center justify-between'>
     <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png"
          alt=""
        />

         <div className='text-right'>
           <h2 className='text-lg font-medium'>Karan</h2>
           <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 OD 8200</h4>
           <p className='text-sm text-gray-600'>BMW Alto</p>
         </div>
     </div>

    <div className=" flex gap-2 flex-col justify-between items-center">
      

      <div className="w-full mt-5">
        <div className="flex p-3 border-b-2 border-b-[#dde2e3] gap-5 items-center">
          <i className="ri-map-pin-range-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-gray-600 -mt-1 text-sm">
              Kankaria Talab , Bhopal
            </p>
          </div>
        </div>
        <div className="flex p-3 border-b-2 border-b-[#dde2e3] gap-5 items-center">
          <i className="ri-map-pin-user-line"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-gray-600 -mt-1 text-sm">
              Kankaria Talab , Bhopal
            </p>
          </div>
        </div>

        <div className="flex p-3  gap-5 items-center">
          <i className="ri-currency-line"></i>
          <div>
            <h3 className="text-lg  font-medium">₹193.20</h3>
            <p className="text-gray-600 -mt-1 text-sm">Cash Cash</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WaitingForDriver
