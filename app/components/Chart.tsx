"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: any[],
  dataKey: string,
  Ymin : number,
  Ymax: number
}

export default function Chart(props: ChartProps) {

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
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
        <YAxis domain={[props.Ymin, props.Ymax]}/>
        <Tooltip />
        <Line type="monotone" dataKey={props.dataKey} stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}