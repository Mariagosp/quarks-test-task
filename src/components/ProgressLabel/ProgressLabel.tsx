import { ViewBox } from "../../types/ViewBox";

type Props = {
  label: "You" | "Goal";
  viewBox: ViewBox;
};

export const ProgressLabel: React.FC<Props> = (props) => {
  const { viewBox, label } = props;
  const { x, y } = viewBox;

  return (
    <g>
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="2.11"
            stdDeviation="10.53"
            flood-color="rgba(0, 0, 0, 0.14)"
          />
        </filter>
      </defs>

      <rect
        x={x - 10}
        y={y - 30}
        rx={4.72}
        ry={4.72}
        width={40.8}
        height={27}
        fill="#fff"
        filter="url(#shadow)"
      />

      <text
        x={x + 10}
        y={y - 13}
        textAnchor="middle"
        fill="#111111"
        fontSize={12}
        fontWeight="700"
      >
        {label}
      </text>
    </g>
  );
};