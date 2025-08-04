import React, { useState, useEffect } from 'react';
import vehicleData from '../data/vehicle_dropdown_data.json';

function DropdownForm({ onCalculate }) {
  const [make, setMake] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [fuel, setFuel] = useState('');
  const [crsp, setCRSP] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [transmission, setTransmission] = useState('');
  const [driveConfig, setDriveConfig] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [bodyType, setBodyType] = useState('');

  const makes = Object.keys(vehicleData);

  const models = make ? Object.keys(vehicleData[make]) : [];
  const fuels = make && modelNumber ? Object.keys(vehicleData[make][modelNumber]) : [];
  const crsps = make && modelNumber && fuel ? Object.keys(vehicleData[make][modelNumber][fuel]) : [];
  const sample = make && modelNumber && fuel && crsp ? vehicleData[make][modelNumber][fuel][crsp] : {};
  const transmissions = sample?.transmissions || [];
  const driveConfigs = sample?.driveConfigurations || [];
  const engineCapacities = sample?.engineCapacities || [];
  const bodyTypes = sample?.bodyTypes || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({
      make,
      modelNumber,
      fuel,
      crsp,
      year,
      month,
      transmission,
      driveConfig,
      engineCapacity,
      bodyType
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={make} onChange={(e) => setMake(e.target.value)} required>
        <option value="">Select Make</option>
        {makes.map(m => <option key={m} value={m}>{m}</option>)}
      </select>
      <select value={modelNumber} onChange={(e) => setModelNumber(e.target.value)} required>
        <option value="">Select Model Number</option>
        {models.map(m => <option key={m} value={m}>{m}</option>)}
      </select>
      <select value={fuel} onChange={(e) => setFuel(e.target.value)} required>
        <option value="">Select Fuel</option>
        {fuels.map(f => <option key={f} value={f}>{f}</option>)}
      </select>
      <select value={crsp} onChange={(e) => setCRSP(e.target.value)} required>
        <option value="">Select CRSP</option>
        {crsps.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
      <input type="number" placeholder="Month" value={month} onChange={(e) => setMonth(e.target.value)} required />
      <select value={transmission} onChange={(e) => setTransmission(e.target.value)} required>
        <option value="">Select Transmission</option>
        {transmissions.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <select value={driveConfig} onChange={(e) => setDriveConfig(e.target.value)} required>
        <option value="">Select Drive Configuration</option>
        {driveConfigs.map(d => <option key={d} value={d}>{d}</option>)}
      </select>
      <select value={engineCapacity} onChange={(e) => setEngineCapacity(e.target.value)} required>
        <option value="">Select Engine Capacity</option>
        {engineCapacities.map(ec => <option key={ec} value={ec}>{ec}</option>)}
      </select>
      <select value={bodyType} onChange={(e) => setBodyType(e.target.value)} required>
        <option value="">Select Body Type</option>
        {bodyTypes.map(bt => <option key={bt} value={bt}>{bt}</option>)}
      </select>
      <button type="submit">Calculate Tax</button>
    </form>
  );
}

export default DropdownForm;