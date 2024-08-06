"use client";

import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";

function CounterInput({
  detail,
  defaultValue,
}: {
  detail: string;
  defaultValue?: number;
}) {
  const [count, setCount] = useState(defaultValue || 0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (count === 0) return;
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <Card className="mb-4">
      <input type="hidden" name={detail} value={count} />
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-col">
            <h2 className="font-medium capitalize">{detail}</h2>
            <p className="text-sm text-muted-foreground">
              Specify the number of {detail}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={decreaseCount}
            >
              <LuMinus className="h-5 w-5 text-primary" />
            </Button>
            <span className="w-5 text-center text-xl font-bold">{count}</span>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={increaseCount}
            >
              <LuPlus className="h-5 w-5 text-primary" />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default CounterInput;
