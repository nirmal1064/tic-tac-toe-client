import { Grid, TextField } from "@mui/material";

type GridTextFieldProps = {
  label: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const GridTextField = ({
  value,
  label,
  type = "text",
  onChange
}: GridTextFieldProps) => {
  return (
    <Grid item marginBottom={"10px"}>
      <TextField
        type={type}
        value={value}
        label={label}
        variant="outlined"
        onChange={onChange}
      />
    </Grid>
  );
};

export default GridTextField;
