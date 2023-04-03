import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import FirmCard from "../components/FirmCard";
import { flex } from "../styles/globalStyles";

const Firms = () => {
  const { getStockData } = useStockCall();

  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("firms");
  }, []);

  console.log(firms);

  return (
    <div>
      <Typography variant="h3" color="error" mb={3}>
        Firm
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
              <FirmCard firm={firm}/>

          </Grid>
        ))}
      </Grid>
      ;
    </div>
  );
};

export default Firms;
