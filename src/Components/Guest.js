import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from 'carbon-components-react';
import { ModalWrapper } from 'carbon-components-react';
import Address from './Address';
import EditGuest from './EditGuest';
import './Guest.css';

const Guest = props => (
  <div className="guest">
    <Tile>
      <h3 className="guest__name">{props.name}</h3>
      <div className="guest__meta">
        <span className={"guest__rsvp" + (props.isConfirmed ? " guest__rsvp--yes" : "")}>{props.isConfirmed ? 'Confirmed' : 'Not Confirmed'}</span>
        <span className="guest__guests">+{props.guests}</span>
      </div>
      <div className="guest__address">
        <Address
          address={props.address || {}}
        />
      </div>
      <div className="guest__actions">
        <div className="guest__edit">
          <ModalWrapper
            id={"edit-guest-" + props.id + "-modal"}
            buttonTriggerText="Edit"
            modalHeading={"Edit " + props.name}
            handleSubmit={e => props.handleUpdateGuest(e)}
            shouldCloseAfterSubmit
          >
            <EditGuest
              id={props.id}
              name={props.name || ''}
              address={props.address || {}}
              isConfirmed={props.isConfirmed || false}
              guests={props.guests || 0}
              handleGuestName={e => props.handleGuestName(e.target.value)}
              handleGuestRsvp={checked => props.handleGuestRsvp(checked)}
              handleGuestGuests={e => props.handleGuestGuests(Number(e.imaginaryTarget.value))}
              handleAddressL1={e => props.handleAddressL1(e.target.value)}
              handleAddressL2={e => props.handleAddressL2(e.target.value)}
              handleAddressCity={e => props.handleAddressCity(e.target.value)}
              handleAddressState={e => props.handleAddressState(e.target.value)}
              handleAddressZipcode={e => props.handleAddressZipcode(e.target.value)}
            />
          </ModalWrapper>
        </div>
        <div className="guest__remove">
          <ModalWrapper
              id={"remove-guest-" + props.id + "-modal"}
              buttonTriggerText="Remove"
              triggerButtonKind="danger"
              modalHeading="Remove Guest"
              primaryButtonText="Remove"
              handleSubmit={e => props.handleRemoveGuest(e)}
              shouldCloseAfterSubmit
              danger
            >
            <div>
              <h3>Are you sure you want to remove <strong>{props.name}</strong>?</h3>
            </div>
          </ModalWrapper>
        </div>
      </div>
    </Tile>
  </div>
);

Guest.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  guests: PropTypes.number.isRequired,
  address: PropTypes.object.isRequired,
  handleGuestName: PropTypes.func.isRequired,
  handleGuestRsvp: PropTypes.func.isRequired,
  handleGuestGuests: PropTypes.func.isRequired,
  handleAddressL1: PropTypes.func.isRequired,
  handleAddressL2: PropTypes.func.isRequired,
  handleAddressCity: PropTypes.func.isRequired,
  handleAddressState: PropTypes.func.isRequired,
  handleAddressZipcode: PropTypes.func.isRequired,
  handleUpdateGuest: PropTypes.func.isRequired,
  handleRemoveGuest: PropTypes.func.isRequired
}

export default Guest;
