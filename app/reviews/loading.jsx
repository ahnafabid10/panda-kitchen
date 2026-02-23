import ReviewSkeleton from '@/Components/Skeletons/ReviewSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid my-5 grid-cols-3 gap-5'>
            {
                [...Array(12)].map((_,index)=><ReviewSkeleton key={index}></ReviewSkeleton>)
            }
        </div>
    );
};

export default loading;