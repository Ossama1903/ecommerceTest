import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Product from "examples/Charts/BarCharts/ReportsBarChart";
import { useEffect, useState } from "react";
import axios from "axios";

const getProducts = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/get-products",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.request(config);
  return response;
};

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response.data));
  }, []);

  return (
    <DashboardLayout>
      <MDBox py={2}>
        <MDBox mt={1}>
          <Grid container spacing={3}>
            {products.map((product, index) => (
              <Grid key={index} item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <Product
                    src={product.src}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                  />
                </MDBox>
              </Grid>
            ))}
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
};

export default Dashboard;
