import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ProductsGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    axios.get("https://northwind.vercel.app/api/products").then((res) => {
      setProducts(res.data);
    });
  };

  const deleteProduct = (item) => {
    axios
      .delete("https://northwind.vercel.app/api/products/" + item.id)
      .then((res) => {
        console.log("deleted");
        loadProducts();
      });
  };

  let columns = [
    {
      headerName: "Id",
      field: "id",
      flex: 0.5,
    },
    {
      headerName: "Name",
      field: "name",
      flex: 1,
    },
    {
      headerName: "Unit Price",
      field: "unitPrice",
      flex: 1,
    },
    {
      headerName: "Units In Stock",
      field: "unitsInStock",
      flex: 1,
    },
    {
      headerName: "Quantity Per Unit",
      field: "quantityPerUnit",
      flex: 1,
    },
    {
      headerName: "Delete",
      renderCell: (item) => {
        return (
          <Button color="error" onClick={() => deleteProduct(item)}>
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <div style={{ height: 474, width: "100%" }}>
        <DataGrid rows={products} columns={columns} pageSize={20} />
      </div>
    </>
  );
}

export default ProductsGrid;
