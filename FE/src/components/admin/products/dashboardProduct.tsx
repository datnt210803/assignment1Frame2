import { getProduct } from '../../../actions/product'
import { removeProduct } from '../../../api/products'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { useNavigate } from 'react-router-dom'
import { getCategory } from '../../../actions/category'
import AdminHeader from '../../../layouts/admin/header'
const Dashboard = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const url=useNavigate()
    const { products } = useSelector((state: any) => state.products);
    const { categories } = useSelector((state: any) => state.categories);


    useEffect(() => {
        dispatch(getProduct());
        dispatch(getCategory())
    }, [])


    const removeProductCo = async (id: string) => {
        await removeProduct(String(id))
        dispatch({ type: "admin/delete_product", payload:id })
        
    }
    return (<div>
        <AdminHeader />
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
                            Description
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Image
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
                    {products?.map((product: any) => {
                        const cateId = product?._category


                        const category = categories.find((cate: any) => cate._id === cateId)


                        return <tr key={product._id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {product?.name}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {product?.price}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {product?.desc && product?.desc.length > 50
                                    ? product?.desc.substring(0, 50) + "..."
                                    : product?.desc}
                            </td>
                            <td className="w-[250px] h-[250px] whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <img src={product?.image} />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {category?.name}
                            </td>
                            <td> <div className=''>
                                <Link to={`/admin/products/edit/${product._id}`}><button className='bg-green-500 text-white p-[10px]'>Edit</button></Link>
                                <button className='bg-red-500 text-white p-[10px]' onClick={() => removeProductCo(product._id)}>Delete</button>
                            </div></td>
                        </tr>

                    })}

                </tbody>
            </table>
        </div>
    </div>)
}

export default Dashboard