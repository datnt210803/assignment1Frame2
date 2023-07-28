import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Dispatch } from 'redux'
import { getProduct } from '../../../actions/product'
import { getCategory } from '../../../actions/category'
import { Link } from 'react-router-dom'

import Search from '../../../layouts/user/search'
import Header from '../../../layouts/user/header'
import { Controller, useForm } from 'react-hook-form'

const HomePage = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { products } = useSelector((state: any) => state.products);
    const { categories } = useSelector((state: any) => state.categories);
    const [selectedCateValue, setSelectedCateValue] = useState('');
    const [selectedPriceValue, setSelectedPriceValue] = useState('');
    const [displayedProducts, setDisplayedProducts] = useState(products);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { control, handleSubmit, watch } = useForm();
    const { min }: any = watch(['min']);
    const { max }: any = watch(['max']);


    const handleCateSelectChange = (event: any) => {
        const selectedCateOptionValue = event.target.value;
        setSelectedCateValue(selectedCateOptionValue);
    };
    const onSubmit = (data: any) => {

        if (data.min < data.max) {
            const filterProduct = products.filter((item: any) => item?.price >= data.min && item?.price <= data.max)
            setFilteredProducts(filterProduct)
        } else {
            const filterProduct = products
            setFilteredProducts(filterProduct)
        }

    };
    useEffect(() => {
        dispatch(getProduct());
        dispatch(getCategory());
    }, []);

    useEffect(() => {
        // Lọc sản phẩm dựa trên các giá trị đã chọn
        let filterProduct = products;
        if (selectedCateValue && filteredProducts) {
            if (selectedCateValue === "0") {
                if (filteredProducts.length === 0) {
                    filterProduct = products
                } else {
                    filterProduct = filteredProducts
                }
            } else {

                if (filteredProducts.length === 0) {
                    filterProduct = products
                } else {
                    filterProduct = filteredProducts.filter((product: any) => product.category === selectedCateValue);
                    console.log(filterProduct);
                }
            }
        } else if (filteredProducts) {
            if (filteredProducts.length === 0) {
                filterProduct = products
            } else {
                filterProduct = filteredProducts
            }
        }

        setDisplayedProducts(filterProduct);
    }, [products, selectedCateValue, filteredProducts]);
    console.log(displayedProducts);



    return <div className='relative'>
        <Header />
        <div className='absolute left-10 z-20 h-20 pl-[65%] bg-white'>
            <Search />
        </div>
        <div className='absolute top-20 left-20 z-10 h-32'>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Product Collection
                        </h2>

                        <p className="mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                            praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                            natus?
                        </p>
                    </header>

                    <div className="mt-8 block lg:hidden">
                        <button
                            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                        >
                            <span className="text-sm font-medium"> Filters & Sorting </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-4 w-4 rtl:rotate-180"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                        <div className="hidden space-y-4 lg:block">
                            <div>
                                <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700">
                                    Select category
                                </label>

                                <select value={selectedCateValue} onChange={handleCateSelectChange} className="mt-1 rounded border-gray-300 text-sm">
                                    <option value={0}>Category</option>
                                    {categories.map((category: any) => {
                                        return <option key={category?.id} value={category?._id}>{category?.name}</option>

                                    })}
                                </select>
                            </div>

                            <div className="border-t border-gray-200 bg-white">

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='flex'>
                                        <div className='w-[40%]'>
                                            <Controller

                                                name="min"
                                                control={control}
                                                defaultValue="0"
                                                render={({ field }) => (
                                                    <div>
                                                        <input
                                                            className='w-full'
                                                            placeholder='Min price'
                                                            type="text"
                                                            {...field}
                                                        />
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className='w-[20%]'></div>
                                        <div className='w-[40%]'>
                                            <Controller
                                                name="max"
                                                control={control}
                                                defaultValue="0"
                                                render={({ field }) => (
                                                    <div>
                                                        <input
                                                            className='w-full'
                                                            placeholder='Max price'
                                                            type="text"
                                                            {...field}
                                                        />
                                                    </div>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className='p-[5px] bg-green-500'>Filter</button>

                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {displayedProducts.map((product: any) => {
                                    return <li>
                                        <Link to={`/products/${product?._id}`} className="group block overflow-hidden">
                                            <img
                                                src={product?.image}
                                                alt=""
                                                className="h-[350px] w-[350px] object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
                                            />

                                            <div className="relative bg-white pt-3">
                                                <h3
                                                    className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                                >
                                                    {product?.name}
                                                </h3>

                                                <p className="mt-2">
                                                    <span className="sr-only">Price </span>

                                                    <span className="tracking-wider text-gray-900"> {product?.price} </span>
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

}

export default HomePage