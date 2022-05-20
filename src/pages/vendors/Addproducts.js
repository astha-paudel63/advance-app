import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";

import { BsFillImageFill } from "react-icons/bs";

import { TiDelete } from "react-icons/ti";
const Addproduct = styled.div`
  margin: 70px 0 0 270px;
  padding: 100px;
  .form {
    display: flex;
    flex-direction: column;
    width: 50%;
    label {
      font-size: 1.1rem;
      color: rgba(0, 0, 0, 0.6);
      margin: 0 0 5px 0;
    }
    input {
      font-size: 1rem;
      padding: 10px 10px;
      margin: 0 0 20px 0;
    }
  }
  .details_form {
    display: flex;
    .numbers_form {
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      input {
        font-size: 1rem;
        padding: 8px 10px;
        margin: 0 0 20px 0;
      }
    }
  }
  .button {
    display: flex;
    justify-content: center;
    button {
      color: #fff;
      font-size: 1.1rem;
      font-weight: 600;
      text-transform: uppercase;
      background-color: #4b393c;
      border: none;
      padding: 10px 25px;
      margin: 0 10px 0 0;
      border-radius:8px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color:#4b393c73;
        color: black;
      }
    }
  }
  .images-container {
      display: flex;
      width: 100%;
      justify-content: space-between;
  }
  .dropzone {
    width: 180px;
    height: 300px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      width: 160px;
      height: 240px;
    }
    .remove {
      position: absolute;
      top: -10px;
      right: -10px;
    }
  }
`;

const AddProducts = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  console.log(thumbnail, images, "thumbnail");
  return (
    <Addproduct>
      <div className="form">
        <label htmlFor="productname">Product Name</label>
        <input type="text" id="productname" />
        <label htmlFor="productbrand">Brand</label>
        <input type="text" id="productbrand" />
        <label htmlFor="usercategory">Category</label>
        <input type="text" id="usercategory" />
      </div>
      <div className="dropzone-container">
        <Dropzone onDrop={(acceptedFiles) => setThumbnail(acceptedFiles[0])}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <label>Upload Product Thumbnail </label>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="dropzone">
                  {thumbnail ? (
                    <img
                      src={URL.createObjectURL(thumbnail)}
                      alt={thumbnail.name}
                    />
                  ) : (
                    <BsFillImageFill size={80} color={"#4b393c"} />
                  )}
                  {thumbnail && (
                    <TiDelete
                      className="remove"
                      onClick={(e) => setThumbnail(null)}
                      size={35}
                      color="red"
                    />
                  )}
                </div>
              </div>
            </section>
          )}
        </Dropzone>
      </div>

      <div className="dropzone-container">
        <Dropzone onDrop={(acceptedFiles) => setImages([...images, ...acceptedFiles])}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <label>Upload Product Images (4)</label>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
               <div className="images-container">
                {images.map((i) => (
                  <div className="dropzone">
                    <img src={URL.createObjectURL(i)} alt={i.name} />
                    {i && (
                      <TiDelete
                        className="remove"
                        onClick={(e) => {
                            e.stopPropagation();
                            setImages(images.filter(x => x.path !== i.path))
                        }
                        }
                        size={35}
                        color="red"
                      />
                    )}
                  </div>
                ))}
                {images.length < 4 && <div className="dropzone">
                  <BsFillImageFill size={80} color={"#4b393c"} />
                </div>}
                </div>

              </div>
            </section>
          )}
        </Dropzone>
      </div>

      <div className="details_form">
        <div className="numbers_form">
          <label htmlFor="productprice">Unit Price (in Rs.)</label>
          <input type="number" id="productprice" />
        </div>
        <div className="numbers_form">
          <label htmlFor="productdisamount">Discount amount</label>
          <input type="number" id="productdisamount" />
        </div>
        <div className="numbers_form">
          <label htmlFor="userstockquantity">Stock Quantity</label>
          <input type="number" id="userstockquantity" />
        </div>
      </div>
      <div className="wyswyg"></div>
      <div className="button">
        <button type="button">Add Products</button>
      </div>
    </Addproduct>
  );
};

export default AddProducts;
