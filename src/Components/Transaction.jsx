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
            <h1 className='text-3xl text-extrabold mt-4'>Transaction Detail</h1>
            <p className='mt-4'><span className='text-green-700 text-semibold'>Transaction</span> / #123456</p>

        </div>
    );
};

export default Transaction;