import axios from "axios";
import React, { useEffect, useState,useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Table, { Styles } from "../../components/BasicTable";
import * as PATHS from '../../constants/URLS';

const Productcontainer = styled.div`
  margin: 70px 0 0 270px;
  width:100%;
  background-color:rgb(194, 161, 183);
  border: 5px solid #b26f7da3;
  .vendor-row {
  display: flex;
  align-items: center;
  margin: 10px;
  span {
    font-size: 18px;
  }
  .sn {
    flex-basis: 4%;
  }
  .thumbnail {
    width: 100px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 15px;
      box-shadow: 1px 1px 5px 1px #00000038;
    }
  }
  .name {
    flex-basis: 25%;
    display: flex;
  }
  .shop {
    flex-basis: 25%;
    display: flex;
  }
  .contact, .email {
    flex-basis: 15%;
    display: flex;
  }
  .contact {
    flex-basis: 25%;
  }
}
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProductsFromServer = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://167.71.226.245:3005/api/products/verified",
      });
      console.log(response, "check vendors");
      const { data } = response;
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProductsFromServer();
  }, []);
  const columns = useMemo(() => [
    {
      Header: "S.n",
      accessor: "index+1",
    },
    {
      Header: "Thumbnail",
      accessor: "shopName",
    },
    {
      Header: " product",
      accessor: "productName",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Brand",
      accessor: "brand",
    },
  ]);
const tableData = useMemo(() => products); 
  return (
    <Productcontainer>
      {/* {products.map((v, index) => (
        <div key={v._id} className="vendor-row">
           <div className="sn">
            <span>{index+1}</span>
          </div>
          <div className="thumbnail">
          <img src={v.thumbnail} alt={v.productName} height="500" />
          </div>
          <div className="shop">
            <span>{v.productName}</span>
          </div>
          <div className="email">
            <span>{v.category}</span>
          </div>
          <div className="contact">
            <span>{v.brand}</span>
          </div>
          
        </div>
      ))} */}
      <Link to={PATHS.ADD_PRODUCT}>
        ADD PRODUCT
      </Link>
      <Styles>
        <Table columns={columns} data={tableData} />
      </Styles>
    </Productcontainer>
  );
};

export default Products;