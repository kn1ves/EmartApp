import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class FilterSize extends React.Component {
  state = {
    3: false,
    3.5: false,
    4: false,
    4.5: false,
    5: false,
    5.5: false,
    6: false,
    6.5: false,
    7: false,
    7.5: false,
    8: false,
    8.5: false,
    9: false,
    9.5: false,
    10: false,
    free: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Sizes</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('3')}
                value="3"
              />
            }
            label="3"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('3.5')}
                value="3.5"
              />
            }
            label="3.5"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('4')}
                value="4"
              />
            }
            label="4"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('4.5')}
                value="4.5"
              />
            }
            label="4.5"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('5')}
                value="5"
              />
            }
            label="5"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('5.5')}
                value="5.5"
              />
            }
            label="5.5"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('6')}
                value="6"
              />
            }
            label="6"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('6.5')}
                value="6.5"
              />
            }
            label="6.5"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('7')}
                value="7"
              />
            }
            label="7"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('7.5')}
                value="7.5"
              />
            }
            label="7.5"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('8')}
                value="8"
              />
            }
            label="8"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('8.5')}
                value="8.5"
              />
            }
            label="8.5"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('9')}
                value="9"
              />
            }
            label="9"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('9.5')}
                value="9.5"
              />
            }
            label="9.5"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChange('10')}
                value="10"
              />
            }
            label="10"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.free}
                onChange={this.handleChange('free')}
                value="free"
              />
            }
            label="Free Size"
          />
        </FormGroup>
      </FormControl>
    );
  }
}

export default FilterSize;