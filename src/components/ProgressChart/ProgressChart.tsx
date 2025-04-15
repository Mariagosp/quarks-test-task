import {
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  ComposedChart,
  Cell,
  ReferenceDot,
} from "recharts";
import "./ProgressChart.scss";
import { graphData } from "../../utils/graphData";
import { ProgressLabel } from "../ProgressLabel/ProgressLabel";


export const ProgressChart = () => {
  return (
    <div className="graph-wrapper">
      <p className="graph-caption">
        Take a quiz to get
        <br />a personalized plan
      </p>
      <div className="graph-container">
        <ResponsiveContainer width="100%" height={200}>
          <ComposedChart data={graphData}>
            <CartesianGrid
              vertical={false}
              stroke="#D2CFDF"
              strokeWidth={1}
              strokeDasharray="0"
            />
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tickCount={4}
            />
            <YAxis hide />

            <Bar barSize={43.05} dataKey="value" radius={[5.27, 5.27, 0, 0]}>
              <Cell fill="#A9DEF4" />
              <Cell fill="#9CC9DC" />
              <Cell fill="#69A8C2" />
              <Cell fill="#5190AA" />
              <Cell fill="#31728D" />
            </Bar>
            <Line
              type="basis"
              dataKey="uv"
              stroke="#1C3C52"
              strokeWidth={2}
              dot={{ r: 0 }}
            />

            <ReferenceDot
              x={0}
              y={graphData[0].uv}
              r={10}
              fill="#A9DEF4"
              stroke="#FFFFFF"
              strokeWidth={4}
              label={(props) => <ProgressLabel {...props} label="You" />}
            />

            <ReferenceDot
              x={4}
              y={graphData[4].uv}
              r={10}
              fill="#31728D"
              stroke="#FFFFFF"
              strokeWidth={4}
              label={(props) => <ProgressLabel {...props} label="Goal" />}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
