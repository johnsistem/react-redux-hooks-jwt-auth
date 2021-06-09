import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function Dropdown(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">EVENTS</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          name="event_type"
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={props.handleEvent}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Bootcamp"}>Bootcamp</MenuItem>
          <MenuItem value={"Charity"}>Charity</MenuItem>
          <MenuItem value={"Exhibitions"}>Exhibitions</MenuItem>
          <MenuItem value={"Corporate"}>Corporate</MenuItem>
          <MenuItem value={"Family"}>Family</MenuItem>
          <MenuItem value={"Fundraising"}>Fundraising</MenuItem>
          <MenuItem value={"Holiday"}>Holiday</MenuItem>
          <MenuItem value={"Music events"}>Music events</MenuItem>
          <MenuItem value={"Networking events"}>Networking events</MenuItem>
          <MenuItem value={"Product launches"}>Product launches</MenuItem>
          <MenuItem value={"Sports events"}>Sports events</MenuItem>
          <MenuItem value={"Sponsored runs"}>Sponsored runs</MenuItem>
          <MenuItem value={"Trade shows"}>Trade shows</MenuItem>
        </Select>
      </FormControl>
      <Button className={classes.button} onClick={handleOpen}>
        Select an Event Type from Dropdwon
      </Button>
    </div>
  );
}
