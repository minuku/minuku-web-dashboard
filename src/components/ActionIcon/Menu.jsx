import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const ITEM_HEIGHT = 24;

export default class MenuComponent extends React.Component {
  state = {
    anchorEl: null,
    options: ["edit", "delete"]
  };
  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = (f = null) => {
    this.setState({ anchorEl: null });
    if (f !== null) f();
  };

  componentDidMount() {}
  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? "long-menu" : null}
          aria-haspopup="true"
          onClick={this.handleMenuClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => this.handleMenuClose(null)}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4,
              width: 100
            }
          }}
        >
          {this.props.list.map(option => (
            <MenuItem
              key={option.name}
              onClick={() => this.handleMenuClose(option.function)}
            >
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}
