import React from 'react';

const Transaction = () => {
    return (
        <div className='ml-96'>
            <form className='mt-2'>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-1 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block pl-10 w-fit text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search by Name or Data" required="" />
                </div>
            </form>
            <h1 className='text-3xl font-extrabold mt-4'>Transaction Detail</h1>
            <p className='mt-4'><span className='text-green-700 font-semibold'>Transaction</span> / #123456</p>

            <div className='mt-4 w-3/4'>
                <div className='grid grid-cols-2'>
                    <div>
                        <h4 className='text-2xl font-bold text-black'>#123456</h4>
                        <span className='text-sm'>March 07, 2021</span>
                    </div>
                    <div className='ml-40'>
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Print</button>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Download</button>

                    </div>
                </div>

                <div className='grid grid-cols-3 mt-8'>
                    <div>
                        <p className='text-sm'>Client</p>
                        <p className='text-xl font-semibold mt-1'>Samantha W.</p>
                    </div>
                    <div>
                        <p className='text-sm'>Company</p>
                        <p className='text-xl font-semibold mt-1'>ABC Studio</p>
                    </div>
                    <div>
                        <p className='text-sm'>Payment Type</p>
                        <p className='text-xl font-semibold mt-1'>Paypal</p>
                    </div>
                </div>


                <div className='mt-8 block p-6 w-fit bg-gray-100 rounded-lg shadow-md hover:bg-gray-100'>
                    <p class="font-bold text-black dark:text-gray-100">Service</p>
                    <div className='flex flex-row ... gap-96 m-2'>
                        <span>Web Design + Development</span>
                        <span>$750.00</span>
                    </div>
                    <div className='flex flex-row ... m-2 gap-96'>
                        <span>Hosting</span>
                        <span className='ml-36'>$50.00</span>
                    </div>
                    <div className='flex flex-row ... m-2 gap-96 mt-16'>
                        <span>Subtotal</span>
                        <span className='ml-36'>$800.00</span>
                    </div>
                    <div className='flex flex-row ... m-2 gap-96'>
                        <span>Tax</span>
                        <span className='ml-48'>$10.00</span>
                    </div>
                    <div className='flex flex-row ... m-2 gap-96 font-bold text-black'>
                        <span>Total</span>
                        <span className='ml-36'>$810.00</span>
                    </div>
                </div>

                <div className='mt-8'>

                    <a href="#" class="block p-6 w-fit bg-gray-100 rounded-lg shadow-md hover:bg-gray-100">
                        <p class="font-normal text-black dark:text-gray-100"> <span className='font-bold'>Notes: </span> <br /> Any taxes, fees and other charges of Governmental Authorities applicable to the Issuer. The issuance of the Purchased Note or otherwise applicable to the Issuer have been paid or will be paid by the Issuer at or prior to the Closing Date or Funding Date, to the extent then due.</p>
                    </a>

                </div>
            </div>

        </div>
    );
};

export default Transaction;