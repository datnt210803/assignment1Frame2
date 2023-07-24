import { getCategory } from '../../../actions/category'
import { removeCategory } from '../../../api/category'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import AdminHeader from '../../../layouts/admin/header'


const DashboardCategory = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { categories } = useSelector((state: any) => state.categories);


    useEffect(() => {
        dispatch(getCategory());
    }, [])

    const removeCategoryId = async (id: any) => {
        await removeCategory(id)
        dispatch({ type: "admin/delete_category", payload: id })
    }
    return <div>
        <AdminHeader />
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Name
                        </th>

                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-center">
                    {categories.map((category: any) => {
                        return <tr key={category.id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {category?.name}
                            </td>

                            <td> <div className=''>
                                <Link to={`/admin/categories/edit/${category.id}`}><button className='bg-green-500 text-white p-[10px]'>Edit</button></Link>
                                <button className='bg-red-500 text-white p-[10px]' onClick={() => removeCategoryId(category.id)}>Delete</button>
                            </div></td>
                        </tr>

                    })}

                </tbody>
            </table>
        </div>
    </div>
}

export default DashboardCategory