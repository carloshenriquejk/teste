import React, { useState } from "react";
import { Button } from "../Buttons";

interface Circle {
  id: number;
  x: number;
  y: number;
}

function RedBall() {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [undoneCircles, setUndoneCircles] = useState<Circle[]>([]);

  const handleUndo = () => {
    if (circles.length === 0) return;

    const lastCircle = circles[circles.length - 1];
    const newCircles = circles.slice(0, -1);
    const newUndoneCircles = [...undoneCircles, lastCircle];

    setCircles(newCircles);
    setUndoneCircles(newUndoneCircles);
  };

  const handleRedo = () => {
    if (undoneCircles.length === 0) return;

    const lastUndoneCircle = undoneCircles[undoneCircles.length - 1];
    const newUndoneCircles = undoneCircles.slice(0, -1);
    const newCircles = [...circles, lastUndoneCircle];

    setCircles(newCircles);
    setUndoneCircles(newUndoneCircles);
  };

  const handleCircleClick = (event: React.MouseEvent<SVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const circle = { id: circles.length + 1, x, y };

    const newCircles = [...circles, circle];
    setCircles(newCircles);
    setUndoneCircles([]);
  };

  return (
    <>
      <Button
        onClick={handleUndo}
        isDisabled={circles.length === 0}
        text={"Desfazer"}
      />
      <Button
        onClick={handleRedo}
        isDisabled={undoneCircles.length === 0}
        text={"Refazer"}
      />

      <svg onClick={handleCircleClick} width="100%" height="700">
        {circles.map((circle) => (
          <circle
            key={circle.id}
            cx={circle.x}
            cy={circle.y}
            r="20"
            fill="red"
          />
        ))}
      </svg>
    </>
  );
}

export default RedBall;
