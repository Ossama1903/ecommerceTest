import { useMemo } from "react";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Button } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ReportsBarChart({ src, title, description, price }) {
  return (
    <Card sx={{ height: "450px" }}>
      <MDBox padding="1rem">
        <img
          src={src}
          alt="example"
          style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
        />
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              $
            </MDTypography>
            <MDTypography variant="button" color="text" fontWeight="light">
              {price}
            </MDTypography>
            <Button sx={{ color: "white", ml: 2 }}>Add to cart</Button>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

ReportsBarChart.defaultProps = {
  color: "info",
  description: "",
};

ReportsBarChart.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  price: PropTypes.number.isRequired,
};

export default ReportsBarChart;
