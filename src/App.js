import React, { Component } from 'react';
import GuestList from './Components/GuestList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      guestData: {
        // id: "",
        // name: "",
        // isConfirmed: false,
        // guests: 0,
        // address: {
        //   l1: "",
        //   l2: "",
        //   city: "",
        //   state: "",
        //   zipcode: ""
        // }
      },
      guests: [
        {
          id: "xw1",
          name: "Maximo Mena",
          isConfirmed: true,
          guests: 2,
          address: {
            l1: "2505 E Williams Field Rd",
            l2: "Apt 3076",
            city: "Gilbert",
            state: "AZ",
            zipcode: "85295"
          }
        },
        {
          id: "xw2",
          name: "Natalie Chagoya",
          isConfirmed: false,
          guests: 0,
          address: {
            l1: "2505 E Williams Field Rd",
            l2: "Apt 3076",
            city: "Gilbert",
            state: "AZ",
            zipcode: "85295"
          }
        }
      ]
    }
  }

  handleGuestName = (name, id) =>
    this.updateGuestData('name', name, id);

  handleGuestRsvp = (rsvp, id) =>
    this.updateGuestData('isConfirmed', rsvp, id);

  handleGuestGuests = (guests, id) =>
    this.updateGuestData('guests', guests, id);

  handleAddressL1 = (l1) =>
    this.updateGuestAddress('l1', l1);

  handleAddressL2 = (l2) =>
    this.updateGuestAddress('l2', l2);

  handleAddressCity = (city) =>
    this.updateGuestAddress('city', city);

  handleAddressState = (state) =>
    this.updateGuestAddress('state', state);

  handleAddressZipcode = (zipcode) =>
    this.updateGuestAddress('zipcode', zipcode);

  updateGuestAddress = (attribute, value) => 
    this.setState({
      guestData: {
        address: {
          ...this.state.guestData.address,
          [attribute]: value
        }
      }
    });

  updateGuestData = (attribute, value, id) => 
    this.setState({
      guestData: {
        ...this.state.guestData,
        id: id, 
        [attribute]: value
      }
    });
  
  handleUpdateGuest = (e, id) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (guest.id === id) {
          return {
            ...guest,
            ...this.state.guestData
          }
        }
        return guest;
      }),
      guestData: {}
    });

    return true;
  }

  render() {
    return (
      <div className="content-wrapper">
        <GuestList
          guests={this.state.guests}
          handleGuestName={this.handleGuestName}
          handleGuestRsvp={this.handleGuestRsvp}
          handleGuestGuests={this.handleGuestGuests}
          handleAddressL1={this.handleAddressL1}
          handleAddressL2={this.handleAddressL2}
          handleAddressCity={this.handleAddressCity}
          handleAddressState={this.handleAddressState}
          handleAddressZipcode={this.handleAddressZipcode}
          handleUpdateGuest={this.handleUpdateGuest}
         />
      </div>
    );
  }
}

export default App;
