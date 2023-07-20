import { getAll } from "../api/products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PriceFilter = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.products);
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    const getProduct = async () => { 
      try {
        const { data } = await getAll();
        dispatch({ type: "admin/fetch_product", payload: data });
      } catch (error) {
        // Handle error if needed
      }
    };
    getProduct();

    // Call handleSelectChange() on component mount to apply initial filtering
    handleSelectChange({ target: { value: selectedValue } });

  }, []);

  const handleSelectChange = (event: any) => {
    const selectedOptionValue = event.target.value;
    setSelectedValue(selectedOptionValue);
    switch (selectedOptionValue) {
      case "optionDefault":
        const productOption = products.filter((product: any) => product.price > 0);
        console.log(productOption);
        return;
      case "option1":
        const productOption1 = products.filter((product: any) => product.price > 0 && product.price < 500);
        console.log(productOption1);
        return;
      case "option2":
        const productOption2 = products.filter((product: any) => product.price >= 500 && product.price < 1000);
        console.log(productOption2);
        return;
      case "option3":
        const productOption3 = products.filter((product: any) => product.price >= 1000 && product.price < 1500);
        console.log(productOption3);
        return;
      case "option4":
        const productOption4 = products.filter((product: any) => product.price >= 1500 && product.price < 2000);
        console.log(productOption4);
        return;
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id="optionDefault"
        value="optionDefault"
        checked={selectedValue === 'optionDefault'}
        onChange={handleSelectChange}
      />
      <label htmlFor="optionDefault">Tất cả sp</label><br/>
      <input
        type="checkbox"
        id="option1"
        value="option1"
        checked={selectedValue === 'option1'}
        onChange={handleSelectChange}
      />
      <label htmlFor="option1">0-500</label><br/>
      <input
        type="checkbox"
        value="option2"
        id="option2"
        checked={selectedValue === 'option2'}
        onChange={handleSelectChange}
      />
      <label htmlFor="option2">500-1000</label><br/>
      <input
        type="checkbox"
        value="option3"
        id="option3"
        checked={selectedValue === 'option3'}
        onChange={handleSelectChange}
      />
      <label htmlFor="option3">1000-1500</label><br/>
      <input
        type="checkbox"
        value="option4"
        id="option4"
        checked={selectedValue === 'option4'}
        onChange={handleSelectChange}
      />
      <label htmlFor="option4">1500-2000</label><br/>
    </div>
  );
};

export default PriceFilter;
