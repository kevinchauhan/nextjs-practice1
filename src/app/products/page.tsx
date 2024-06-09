import Product from '@/components/Product'
import Model from '@/components/Model'
import React from 'react'

const list = [
    {
        id: 1,
        name: 'p1',
        price: 500,
        img: 'uibfb'
    },
    {
        id: 2,
        name: 'p12',
        price: 1200,
        img: 'uibfb'
    },
    {
        id: 3,
        name: 'p3',
        price: 5560,
        img: 'uibfb'
    },
]

const Products = () => {
    return (
        <>
            <div className="bg-white" >
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {
                            list.map((item) =>
                                <Product key={item.id} item={item} />
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Products