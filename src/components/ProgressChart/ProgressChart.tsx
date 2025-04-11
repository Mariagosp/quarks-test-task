import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  ComposedChart,
  Cell,
} from "recharts";
import "./ProgressChart.scss";

const data = [
  { week: "WEEK 1", value: 20 },
  { week: "", value: 33 },
  { week: "", value: 42 },
  { week: "", value: 54 },
  { week: "WEEK 4", value: 65 },
];

export default function GraphComponent() {
  return (
    <div className="graph-wrapper">
      <p className="graph-caption">
        Take a quiz to get
        <br />a personalized plan
      </p>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid
            vertical={false}
            stroke="#D2CFDF"
            strokeWidth={1}
            strokeDasharray="0"
          />
          <XAxis dataKey="week" axisLine={false} tickLine={false} />
          <YAxis hide />
          {/* <YAxis
            hide={false}
            ticks={[0, 20, 40, 60]} // Указываем значения для 4 линий
          /> */}
          {/* <Tooltip /> */}
          {/* <Bar dataKey="value" fill="#7AC9ED" radius={[10, 10, 0, 0]} /> */}
          <Bar barSize={43.05} dataKey="value" radius={[5.27, 5.27, 0, 0]}>
            <Cell fill="#A9DEF4" />
            <Cell fill="#9CC9DC" />
            <Cell fill="#69A8C2" />
            <Cell fill="#5190AA" />
            <Cell fill="#31728D" />
          </Bar>
          {/* <Line
            type="monotone"
            dataKey="value"
            stroke="#1C3C52"
            strokeWidth={2}
            dot={{ r: 0 }}
          /> */}
        </BarChart>
      </ResponsiveContainer>

      {/* <div className="label you">You</div> */}
      {/* <div className="label goal">Goal</div> */}
    </div>
  );
}
