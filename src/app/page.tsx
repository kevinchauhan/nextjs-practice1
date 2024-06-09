'use client'
import Model from "@/components/Model";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ListItem, remove } from "@/lib/store/ProductSlice";
import { useState } from "react";

export default function Home() {
  const productList = useAppSelector((state) => state.productList)
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState<ListItem>({ id: 0, name: '', price: 0, img: '' })


  const editModel = (id: number) => {
    setInput(productList[id - 1])
    setIsModalOpen(true)
  }
  const closeModal = () => setIsModalOpen(false);

  const handleForm = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('clicked')
  }

  return (
    <>
      <h1>Home</h1>
      <div className="w-2/3 mx-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border bg-gray-100 py-1 px-2">Name</th>
              <th className="border bg-gray-100 py-1 px-2">Price</th>
              <th className="border bg-gray-100 py-1 px-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {
              productList.map(item =>
                <tr key={item.id}>
                  <td className="border py-1 px-2">{item.name}</td>
                  <td className="border py-1 px-2">{item.price}</td>
                  <td className="border py-1 px-2">
                    <button onClick={() => editModel(item.id)} className="bg-yellow-500 rounded p-1 mr-2">Edit</button>
                    <button onClick={() => dispatch(remove(item.id - 1))} className="bg-red-500 rounded p-1">Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <Model isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-5">
          <form onSubmit={handleForm} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                <input value={input.name} id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
              <div className="mt-2">
                <input value={input.price} id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>
        </div>
      </Model>
    </>
  );
}
