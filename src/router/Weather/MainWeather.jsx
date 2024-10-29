import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MenuDash from '../../components/Menu Dashboard/MenuDash';
import Top from '../Dashboard/Components/Top';
import { MainStyled } from '../Dashboard/Style/MainStyled';

const IP_ADDRESS = "4.201.196.181";
const PORT_STH = 8666;

const fetchSensorData = async (attribute) => {
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const response = await fetch(`${corsAnywhere}http://${IP_ADDRESS}:${PORT_STH}/STH/v1/contextEntities/type/Sensor/id/urn:ngsi-ld:Sensor:001/attributes/${attribute}?lastN=10`, {
    method: 'GET',
    headers: {
      'fiware-service': 'smart',
      'fiware-servicepath': '/',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
    }
  });
  const data = await response.json();
  try {
    const values = data.contextResponses[0].contextElement.attributes[0].values;
    return values.map(item => ({
      timestamp: new Date(item.recvTime).toLocaleString('pt-BR'),
      value: parseFloat(item.attrValue)
    }));
  } catch (error) {
    console.error("Error parsing sensor data", error);
    return [];
  }
};

const Dashboard = () => {
  const [luminosityData, setLuminosityData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [luminosity, humidity, temperature] = await Promise.all([
        fetchSensorData('luminosity'),
        fetchSensorData('humidity'),
        fetchSensorData('temperature')
      ]);

      setLuminosityData(luminosity);
      setHumidityData(humidity);
      setTemperatureData(temperature);
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  const renderChart = (data, label, color) => (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke={color} name={label} />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <MainStyled>
      <section className="menu">
        <MenuDash />
      </section>

      <section className="container weather">
        <div>
          <Top />
        </div>

        <div className="chart-section">
          <h2>Luminosity (Lux)</h2>
          {renderChart(luminosityData, 'Luminosity', 'purple')}
          <h2>Humidity (%)</h2>
          {renderChart(humidityData, 'Humidity', 'blue')}
          <h2>Temperature (°C)</h2>
          {renderChart(temperatureData, 'Temperature', 'red')}
        </div>
      </section>
    </MainStyled>
  );
};

export default Dashboard;
