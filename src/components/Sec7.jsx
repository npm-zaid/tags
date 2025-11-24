import React, { forwardRef } from 'react'

const Sec7 = forwardRef((props,ref) => {
  return (
    <div ref={ref} className='bg-zinc-100 p-2 flex flex-col gap-10 justify-center items-center'>
        <h1 className='text-3xl font-bold '>Our Location</h1>
       

       <div className='grid grid-cols-4 gap-6'>
         <div className="flex flex-col h-full w-full bg-zinc-300/70 rounded-lg p-3  ">
            {/* FIXED IMAGE HEIGHT FOR PERFECT ALIGNMENT */}
            <img
              className="h-[80%] w-full object-cover rounded-lg mb-4"
              src="https://yaapcampaign.blob.core.windows.net/oplifi/clinet/media.png"
              alt=""
            />

            <h1 className="text-2xl font-bold mb-2">
              Dubai
            </h1>

            <p className="text-base max-w-[80%] opacity-50">
              802, 8th Floor, Signature (by Lotus), Veera Desai Road Ext, Andheri (West), Mumbai - 400 053
            </p>
          </div>

            <div className="flex flex-col h-full w-full bg-zinc-300/70 rounded-lg p-3  ">
            {/* FIXED IMAGE HEIGHT FOR PERFECT ALIGNMENT */}
            <img
              className="h-[80%] w-full object-cover rounded-lg mb-4"
              src="https://yaapcampaign.blob.core.windows.net/oplifi/clinet/media.png"
              alt=""
            />

            <h1 className="text-2xl font-bold mb-2">
              Dubai
            </h1>

            <p className="text-base max-w-[80%] opacity-50">
              802, 8th Floor, Signature (by Lotus), Veera Desai Road Ext, Andheri (West), Mumbai - 400 053
            </p>
          </div>

            <div className="flex flex-col h-full w-full bg-zinc-300/70 rounded-lg p-3  ">
            {/* FIXED IMAGE HEIGHT FOR PERFECT ALIGNMENT */}
            <img
              className="h-[80%] w-full object-cover rounded-lg mb-4"
              src="https://yaapcampaign.blob.core.windows.net/oplifi/clinet/media.png"
              alt=""
            />

            <h1 className="text-2xl font-bold mb-2">
              Dubai
            </h1>

            <p className="text-base max-w-[80%] opacity-50">
              802, 8th Floor, Signature (by Lotus), Veera Desai Road Ext, Andheri (West), Mumbai - 400 053
            </p>
          </div>

            <div className="flex flex-col h-full w-full bg-zinc-300/70 rounded-lg p-3  ">
            {/* FIXED IMAGE HEIGHT FOR PERFECT ALIGNMENT */}
            <img
              className="h-[80%] w-full object-cover rounded-lg mb-4"
              src="https://yaapcampaign.blob.core.windows.net/oplifi/clinet/media.png"
              alt=""
            />

            <h1 className="text-2xl font-bold mb-2">
              Dubai
            </h1>

            <p className="text-base max-w-[80%] opacity-50">
              802, 8th Floor, Signature (by Lotus), Veera Desai Road Ext, Andheri (West), Mumbai - 400 053
            </p>
          </div>

       </div>
    </div>
  )
})

export default Sec7