import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import { editProductApi, getProduct, getProductByID } from '../../../actions/product';
import { Dispatch } from 'redux';
import { getCategory } from '../../../actions/category';
import AdminHeader from '../../../layouts/admin/header';

const EditProduct = () => {

    const { id } = useParams<string>()
    const dispatch: Dispatch<any> = useDispatch();
    //lấy dữ liệu từ reducer
    const { product } = useSelector((state: any) => state.products)
    const { categories } = useSelector((state: any) => state.categories)
    const [selectedCategory, setSelectedCategory] = useState(product?.category)
    //tạo 1 biến navigate 
    const url = useNavigate()
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        dispatch(getProductByID(String(id)));
        dispatch(getCategory());
    }, [])

    const onHandleSubmit = (d: any) => {
        const productData = {
            ...d,
            category: selectedCategory,
        };
        dispatch(editProductApi(String(id), productData))
        url("/admin/products")
    }
    return (
        <div>
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
                                        defaultValue={product?.name}
                                        {...register("name")}
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="name">Price</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Price"
                                        type="number"
                                        id="price"
                                        defaultValue={product?.price}
                                        {...register("price")}
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="name">Description</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Description"
                                        type="text"
                                        id="desc"
                                        defaultValue={product?.desc}
                                        {...register("desc")}
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="name">Image</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Image"
                                        type="text"
                                        id="image"
                                        defaultValue={product?.image}
                                        {...register("image")}
                                    />
                                </div>
                                <div>
                                    <label>Category</label><br />
                                    <select
                                        className="mt-1 rounded border-gray-300 text-sm"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        {categories.map((category: any) => {
                                            return <option key={category?._id} value={category?._id}>{category?.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"

                                    >
                                        Edit Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EditProduct