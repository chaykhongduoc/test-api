import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../apis/baseApi';


function Product(props) {
  const [data, setData] = useState();

  const getData = async (controller) => {
    try {
      const res = await axiosInstance.get("/product/get-all-product", {
        signal: controller.signal
      });
      console.log(res);
      setData(res.data)
    } catch (err) {

    }

  }

  useEffect(() => {
    const controller = new AbortController();

    getData(controller);

    return () => {
      controller.abort();
    }

  }, [])

  return (
    <div>
      Product page
      <Link className='ml-8' to="/weather">Weather</Link>
      {data && data.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
            <img width={300} src={item.image} />
          </div>
        )
      })}
    </div>
  );
}

export default Product;