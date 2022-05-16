import { useEffect, useState,useMemo } from "react"
import  axios from "axios";
import styled from "styled-components";
import Table, { Styles } from "../../components/BasicTable";
import SortedTable from "../../components/SortedTable";
const Container = styled.div`
margin: 70px 0 0 270px;
width:100%;
background-color:#967e8296;
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
  .name {
    flex-basis: 25%;
    display: flex;
  }
  .shop-name{
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

const Vendor = () => {
    const[vendors,setVendor] = useState([]);

    const getVendorsFromServer = async() =>{
    try{const response = await axios({
        method: "GET",
        url: "http://167.71.226.245:3005/api/vendors/verified",
    });
    console.log(response,'check vendor');
    const{data}= response;
    setVendor(data);}
    catch(err){
        console.log(err);

    }
};
    useEffect(() =>{
        getVendorsFromServer();
    },[]);
    const columns = useMemo(() => [
      {
        Header: "Name",
        accessor: "fullName",
      },
      {
        Header: "Shop",
        accessor: "shopName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Tel.",
        accessor: "contactNo",
      },
      {
        Header: "PW",
        accessor: "password",
      },
    ]);
  const tableData = useMemo(() => vendors); 
  return (
    <Container>
     {/* {vendors.map((v, index) => (
        <div key={v._id} className="vendor-row">
          <div className="sn">
            <span>{index + 1}</span>
          </div>
          <div className="name">
            <span>{v.fullName}</span>
          </div>
          <div className="shop">
            <span>{v.shopName}</span>
          </div>
          <div className="contact">
            <span>{v.contactNo}</span>
          </div>
          <div className="email">
            <span>{v.email}</span>
          </div>
         
        </div>
      ))} */}
      <Styles>
        <SortedTable columns={columns} data={tableData} />
      </Styles>
  </Container>

  )
}

export default Vendor