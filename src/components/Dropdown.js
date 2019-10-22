import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      guests: 0,
      children: 0,
      totalGuests: 0
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  decrementScore = (e) => {
    e.preventDefault();
    this.setState( prevState => ({
      guests: prevState.guests - 1,
      totalGuests: prevState.totalGuests - 1
    }))
  }

  incrementScore = (e) => {
    e.preventDefault();
    this.setState( prevState => ({
      guests: prevState.guests + 1,
      totalGuests: prevState.totalGuests + 1
    }))
  }

  decrementChildren = (e) => {
    e.preventDefault();
    this.setState( prevState => ({
      children: prevState.children - 1,
      totalGuests: prevState.totalGuests - 1
    }))
  }

  incrementChildren = (e) => {
    e.preventDefault();
    this.setState( prevState => ({
      children: prevState.children + 1,
      totalGuests: prevState.totalGuests + 1
    }))
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        <span>{ this.state.totalGuests } Guests</span>
        </DropdownToggle>
        <DropdownMenu>
          {/* Adults */}
          <div className="counter">
          <span>Adults</span>
            <div className="counter-components">
              <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
              <span className="counter-score">{ this.state.guests }</span>
              <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
          </div>
          {/* Children */}
          <div className="counter">
          <span>Children</span>
            <div className="counter-components">
              <button className="counter-action decrement" onClick={this.decrementChildren}> - </button>
              <span className="counter-score">{ this.state.children }</span>
              <button className="counter-action increment" onClick={this.incrementChildren}> + </button>
            </div>
          </div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}