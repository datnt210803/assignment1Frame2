import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react"
import { editCategoryApi, getCategoryByID } from '../../../actions/category';
import { Dispatch } from 'redux';
import AdminHeader from '../../../layouts/admin/header';


const EditCategory = () => {
    const { id } = useParams()
    const dispatch: Dispatch<any> = useDispatch();
    //lấy dữ liệu từ reducer
    const { category } = useSelector((state: any) => state.categories)
    //tạo 1 biến navigate 
    console.log(category);

    const url = useNavigate()
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        dispatch(getCategoryByID(String(id)));
    }, [])

    const onHandleSubmit = (d: any) => {
        dispatch(editCategoryApi(String(id), d))
        url("/admin/categories")
    }
    return <div>
        <AdminHeader />
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4" onSubmit={handleSubmit(onHandleSubmit)}>
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    defaultValue={category?.name}
                                    {...register("name")}
                                />
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"

                                >
                                    Update Category
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default EditCategory