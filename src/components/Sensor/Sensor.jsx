import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Sensor({data}) {
  console.log(data)
  return (
    <div>
      <h1>TechSphere - Weather Sensor Data</h1>
      <div className="dashboard">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="luminosity" stroke="#FFA500" name="Luminosity (Lux)" />
          <Line type="monotone" dataKey="humidity" stroke="#0000FF" name="Humidity (%)" />
          <Line type="monotone" dataKey="temperature" stroke="#FF0000" name="Temperature (°C)" />
          <Line type="monotone" dataKey="rain" stroke="#00CED1" name="Rain (mm)" />
        </LineChart>
      </div>
    </div>
  );
}
