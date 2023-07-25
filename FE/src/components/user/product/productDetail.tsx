import { Dispatch, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../../api/products";
import { getProductByID } from "../../../actions/product";
import Header from "../../../layouts/user/header";

const ProductDetail = () => {
    const { id } = useParams()
    const dispatch: Dispatch<any> = useDispatch();
    //lấy dữ liệu từ reducer
    const { product } = useSelector((state: any) => state.products)
    //tạo 1 biến navigate 
    const url = useNavigate()

    useEffect(() => {
        dispatch(getProductByID(String(id)));
    }, [])

    return <div>
        <Header />
        <div className="group block w-[450px] ml-[35%]">
            <img
                src={product?.image}
                alt=""
                className="h-[450px] w-[450px] object-cover sm:h-[450px]"
            />

            <div className="mt-3 flex justify-between text-sm">
                <div>
                    <h3
                        className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                        {product?.name}
                    </h3>

                    <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                        {product?.desc}
                    </p>
                </div>

                <p className="text-gray-900">{product?.price}</p>
            </div>
        </div>
    </div>
}

export default ProductDetail