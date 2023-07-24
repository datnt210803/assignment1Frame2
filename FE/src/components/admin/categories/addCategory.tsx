import { addCategoryApi } from '../../../actions/category';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dispatch } from 'redux';
import AdminHeader from '../../../layouts/admin/header';
const AddCategory = () => {
    const dispatch: Dispatch<any> = useDispatch();
    //lấy dữ liệu từ reducer
    const { categories } = useSelector((state: any) => state.categories)
    //tạo 1 biến navigate 
    const url = useNavigate()
    const { register, handleSubmit } = useForm();

    const onHandleSubmit = (d: any) => {
        dispatch(addCategoryApi(d))
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
                                    {...register("name")}
                                />
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"

                                >
                                    Add Category
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default AddCategory