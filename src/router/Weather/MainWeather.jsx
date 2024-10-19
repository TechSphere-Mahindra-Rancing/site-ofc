import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sensor from '../../components/Sensor/Sensor';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const MainWeather = () => {
  // Estados para armazenar os dados
  const [sensorData, setSensorData] = useState({
    timestamps: [],
    luminosityValues: [],
    humidityValues: [],
    temperatureValues: [],
  });

  const IP_ADDRESS = '4.201.196.181';
  const PORT_STH = 8666;
  const lastN = 10; // Número de leituras recentes

  // Função para buscar dados da API
  const getSensorData = async (attribute) => {
    const url = `http://${IP_ADDRESS}:${PORT_STH}/STH/v1/contextEntities/type/Sensor/id/urn:ngsi-ld:Sensor:001/attributes/${attribute}?lastN=${lastN}`;
    const headers = {
      'fiware-service': 'smart',
      'fiware-servicepath': '/'
    };
    try {
      const response = await axios.get(url, { headers });
      if (response.status === 200) {
        const values = response.data.contextResponses[0].contextElement.attributes[0].values;
        return values;
      } else {
        console.error(`Erro ao acessar ${url}: ${response.status}`);
        return [];
      }
    } catch (error) {
      console.error(`Erro: ${error}`);
      return [];
    }
  };

  // Função para atualizar os dados
  const updateSensorData = async () => {
    const luminosityData = await getSensorData('luminosity');
    const humidityData = await getSensorData('humidity');
    const temperatureData = await getSensorData('temperature');
    const rainData = await getSensorData('rain');

    // Extraindo os valores e timestamps
    const timestamps = luminosityData.map(entry => new Date(entry.recvTime).toLocaleString());
    const luminosityValues = luminosityData.map(entry => parseFloat(entry.attrValue));
    const humidityValues = humidityData.map(entry => parseFloat(entry.attrValue));
    const temperatureValues = temperatureData.map(entry => parseFloat(entry.attrValue));
    const rainValues = rainData.map(entry => parseFloat(entry.attrValue));

    setSensorData({
      timestamps,
      luminosityValues,
      humidityValues,
      temperatureValues,
      rainValues
    });
  };

  // useEffect para chamar a função de atualização a cada 10 segundos
  useEffect(() => {
    updateSensorData();
    const interval = setInterval(updateSensorData, 10000); // Atualiza a cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  // Dados para o gráfico
  const data = sensorData.timestamps.map((timestamp, index) => ({
    timestamp,
    luminosity: sensorData.luminosityValues[index],
    humidity: sensorData.humidityValues[index],
    temperature: sensorData.temperatureValues[index],
    rain: sensorData.rainValues[index]
  }));

  return (
    <>
        <Sensor data={data}/>
    </>
  );
};

export default MainWeather;
