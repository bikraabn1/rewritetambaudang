"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartProps{
  data: any[],
  dataKey: string
}

export default function Chart(props : ChartProps) {
 
  return (
      <ResponsiveContainer width={600} height={500}>
        <LineChart
          width={500}
          height={300}
          data={props.data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={props.dataKey} stroke="#8884d8"  />
        </LineChart>
      </ResponsiveContainer>
  )
}