import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const IP_ADDRESS = "4.201.196.181";
const PORT_STH = 8666;

const fetchSensorData = async (attribute) => {
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const response = await fetch(`${corsAnywhere}http://${IP_ADDRESS}:${PORT_STH}/STH/v1/contextEntities/type/Sensor/id/urn:ngsi-ld:Sensor:001/attributes/${attribute}?lastN=10`, {
    method: 'GET',
    headers: {
      'fiware-service': 'smart',
      'fiware-servicepath': '/',
      // Cabeçalhos adicionais CORS
      'Access-Control-Allow-Origin': '*', // Permitir qualquer origem (para desenvolvimento)
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
    const interval = setInterval(fetchData, 10000);  // Atualiza a cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  const renderChart = (data, label, color) => (
    <ResponsiveContainer width="80%" height={300}>
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
    <div>
      <h1>Weather Sensor Dashboard</h1>
      <h2>Luminosity (Lux)</h2>
      {renderChart(luminosityData, 'Luminosity', 'orange')}
      <h2>Humidity (%)</h2>
      {renderChart(humidityData, 'Humidity', 'blue')}
      <h2>Temperature (°C)</h2>
      {renderChart(temperatureData, 'Temperature', 'red')}
    </div>
  );
};

export default Dashboard;