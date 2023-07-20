import { getProduct, removeProduct } from '../../../actions/product'
import { remove } from '../../../api/products'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
const Dashboard = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { products } = useSelector((state: any) => state.products);

    useEffect(() => {
        dispatch(getProduct());
    }, [])
    console.log(products);
    const removeProduct=async(id:any)=>{ 
        await remove(id)
        dispatch({type:"admin/delete_product",payload:id})
    }
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Price
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Image
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Description
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Category
                        </th>
                        
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-center">
                    {products.map((product: any) => {
                        return <tr key={product.id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {product?.name}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {product?.price}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <img className='w-[50px] h-[50px]' src={product?.image} />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            {product?.desc && product.desc.length > 75 ? `${product.desc.slice(0, 75)}...` : product.desc}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {product?.category}
                            </td>
                            
                            <td> <div className=''>
                                <Link to={`/edit/${product.id}`}><button className='bg-green-500 text-white p-[10px]'>Edit</button></Link>
                                <button className='bg-red-500 text-white p-[10px]' onClick={() => removeProduct(product.id)}>Delete</button>
                            </div></td>
                        </tr>

                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Dashboard