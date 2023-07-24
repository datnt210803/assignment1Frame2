import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useEffect, useState } from "react"
import { getProduct } from "../../actions/product";
import { Link } from "react-router-dom";
const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch: Dispatch<any> = useDispatch();
    let { products } = useSelector((state: any) => state.products);

    useEffect(() => {
        // Dispatch action to get products only when searchTerm changes
        if (searchTerm.trim() !== "") {
            dispatch(getProduct());
        }
    }, [searchTerm, dispatch]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = searchTerm.trim() !== ""
        ? products.filter((product: any) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];


    return <header className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end gap-4">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <label className="sr-only" htmlFor="search"> Search </label>

                        <input
                            className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                            id="search"
                            type="search"
                            placeholder="Search website..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />

                        <button
                            type="button"
                            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                        >
                            <span className="sr-only">Search</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <ul>
            {filteredProducts.map((product: any) =>
                <li className="hover:cursor-pointer"> <Link to={`/products/${product?.id}`}>{product?.name}</Link></li>
            )}

        </ul>

    </header>
}

export default Search