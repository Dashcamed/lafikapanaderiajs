"use client";
import React, { useState, useEffect } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, addOn, totalAdded }) => {
  const [contador, setContador] = useState(totalAdded);
  const [disabledSumar, setDisabledSumar] = useState(false);
  const [disabledRestar, setDisabledRestar] = useState(true);

  useEffect(() => {
    setContador(totalAdded);
    setDisabledSumar(totalAdded >= stock);
    setDisabledRestar(totalAdded <= 1);
  }, [totalAdded, stock]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
      setDisabledRestar(false);
    }
    if (contador + 1 === stock) {
      setDisabledSumar(true);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
      setDisabledSumar(false);
    }
    if (contador - 1 === 1) {
      setDisabledRestar(true);
    }
  };

  let childProps = {
    addOn,
    contador,
    sumar,
    restar,
    disabledSumar,
    disabledRestar,
  };

  return <Counter {...childProps} />;
};
export default CounterContainer;
