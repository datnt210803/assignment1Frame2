import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react"
import { editProductApi, getProduct, getProductByID } from '../../../actions/product';
import { Dispatch } from 'redux';

const EditProduct = () => {
    const { id } = useParams()
    const dispatch: Dispatch<any> = useDispatch();
    //lấy dữ liệu từ reducer
    const { products } = useSelector((state: any) => state.products)
    //tạo 1 biến navigate 
    const url = useNavigate() 
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        dispatch(getProductByID(id));
    }, [])
    
    const onHandleSubmit = (d: any) => {
        dispatch(getProduct());
        console.log(products);
        
        dispatch(editProductApi(d, id))
        url("/products")
    }
    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4" onSubmit={handleSubmit(onHandleSubmit)}>
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="name"
                                    defaultValue={products.name}
                                    {...register("name")}
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="name">Price</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="number"
                                    id="price"
                                    defaultValue={products.price}
                                    {...register("price")}
                                />
                            </div>
                            <div>
                            <label className="sr-only" htmlFor="name">Description</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Description"
                                type="string"
                                id="desc"
                                defaultValue={products.desc}
                                {...register("desc")}
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="name">Category</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Category"
                                type="string"
                                id="category"
                                defaultValue={products.category}
                                {...register("category")}
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="name">Image</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Image"
                                type="string"
                                id="image"
                                defaultValue={products.image}
                                {...register("image")}
                            />
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
    )
}

export default EditProduct