import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const Dater = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState('12:00 PM');
  const [seatCount, setSeatCount] = useState('4+1');
  const [giftCode, setGiftCode] = useState('');
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [question, setQuestion] = useState('Yes'); // Default value
  const datePickerRef = useRef(null);

  const handleApply = () => {
    const message = `Hello, I would like to inquire about booking a car.\nBooking Details:\nDate: ${format(
      selectedDate || new Date(),
      'dd MMM yyyy'
    )}\nTime: ${time}\nSeats: ${seatCount}\nFrom: ${fromAddress}\nTo: ${toAddress}\nGift Code: ${giftCode}\nReturn Booking: ${question}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+919410888861?text=${encodedMessage}`, '_blank');
  };

  return (
    <Container className='container mb-48 sm:mt-24'>
      <div
        className='heading '
        id='form'
      >
        <h4>Provide Your Details!</h4>
        <h3>
          Enter your preferred pickup date, time, and location for
          <span> a Seamless Experience.</span>
        </h3>
      </div>
      <Row className='booking-form'>
        {/* Date Picker */}
        <Col
          md={4}
          className='form-group'
        >
          <label>Select Date :</label>
          <div className='input-group date-input-container'>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat='dd MMM yyyy'
              minDate={new Date()}
              className='form-control rounded-pill shadow-sm date-picker-input'
              ref={datePickerRef}
              placeholderText='Select Date'
            />
          </div>
        </Col>

        {/* Time Picker */}
        <Col
          md={4}
          className='form-group'
        >
          <label>Time :</label>
          <input
            type='time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className='form-control rounded-pill shadow-sm'
          />
        </Col>

        {/* Seat Dropdown */}
        <Col
          md={4}
          className='form-group pad'
        >
          <label>Number of Seats :</label>
          <select
            className='form-control rounded-pill shadow-sm'
            value={seatCount}
            onChange={(e) => setSeatCount(e.target.value)}
          >
            {['4+1', '6+1', '7+1'].map((seat, index) => (
              <option
                key={index}
                value={seat}
              >
                {seat}
              </option>
            ))}
          </select>
        </Col>
      </Row>

      <Row className=''>
        {/* From Address */}
        <Col
          md={6}
          className='form-group sm:mt-24 lg:mt-28 '
        >
          <label>PickUp Location :</label>
          <input
            type='text'
            className='form-control rounded-pill shadow-sm'
            value={fromAddress}
            onChange={(e) => setFromAddress(e.target.value)}
            placeholder='Enter starting location'
          />
        </Col>
        {/* To Address */}
        <Col
          md={6}
          className='form-group'
        >
          <label>Drop Location :</label>
          <input
            type='text'
            className='form-control rounded-pill shadow-sm'
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            placeholder='Enter destination'
          />
        </Col>
      </Row>

      <Row>
        {/* Gift Code */}
        <Col
          md={6}
          className='form-group'
        >
          <label>Gift Code :</label>
          <input
            type='text'
            className='form-control rounded-pill shadow-sm'
            value={giftCode}
            onChange={(e) => setGiftCode(e.target.value)}
            placeholder='Enter gift code'
          />
        </Col>

        {/* Question Dropdown */}
        <Col
          md={6}
          className='form-group'
        >
          <label>Return Booking :</label>
          <select
            className='form-control rounded-pill shadow-sm p-24'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          >
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
        </Col>
      </Row>

      {/* Apply Button */}
      <div className='text-center'>
        <button
          className='apply-button rounded-pill shadow-xl'
          onClick={handleApply}
          disabled={
            !selectedDate ||
            !time ||
            !seatCount ||
            !fromAddress.trim() ||
            !toAddress.trim()
          }
        >
          Apply
        </button>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .container {
          margin-bottom: 100px;
        }

        .booking-title {
          text-align: center;
          margin-bottom: 60px;
          color: gray;
        }

        .booking-form {
          background: #fff;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border: 1px solid #ccc;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border-radius: 50px;
          border: 1px solid #ddd;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.8);
          transition: box-shadow 0.3s ease-in-out;
        }

        .filled-input:not(:placeholder-shown) {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }

        .form-group {
          margin-bottom: 15px;
        }

        .date-input-container {
          width: 100%;
        }

        .apply-button {
          margin-top: 40px;
          margin-bottom: 50px;
          background: #ffa500;
          color: white;
          padding: 10px 30px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-size: 20px;
          font-weight: bold;
          font-family: monospace;
          box-shadow: 0 4px 10px rgba(231, 154, 255, 0.5);
        }

        .apply-button:hover {
          background: rgb(255, 115, 0);
        }

        .apply-button:disabled {
          background: #ccc;
          cursor: not-allowed;
          box-shadow: none;
        }

        .heading {
          text-align: center;
          margin-bottom: 60px;
          margin-top: -10px;
        }

        @media (min-width: 320px) and (max-width: 767px) {
          .heading {
            margin-bottom: 20px;
            margin-top: 40px;
          }
        }

        .form-control,
        .date-picker-input,
        select {
          width: 100%;
          height: 50px;
          padding: 10px 15px;
          border-radius: 50px;
          border: 1px solid #ddd;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.8);
          font-size: 16px;
        }

        select {
          appearance: none;
          background-color: white;
        }

        .date-picker-input {
          text-align: center;
        }
      `}</style>
    </Container>
  );
};

export default Dater;
