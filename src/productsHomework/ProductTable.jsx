import React from "react";
import { products } from "../data/products";

function ProductTable() {
  let productList = products.filter((q) => q.unitsInStock !== 0);

  return (
    <>
      <div>
        <h1>Products Length : {productList.length}</h1>
      </div>
      <table className="w3-table w3-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item) => {
            let color = item.unitPrice > 20 ? "w3-red" : "";
            return (
              <tr key={item.id} className={color}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.unitsInStock}</td>
                <td>{item.unitPrice}</td>
                <td>{item.quantityPerUnit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;
