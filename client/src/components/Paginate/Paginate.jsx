import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_recipe } from "../../Reduxx/Actions/actions";

export default function Paginate({ paginado, setPaginado }) {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  let quantity = 9;
  let total = paginado.length;
  let paginate = Math.ceil(total / quantity);
  const [current, setCurrent] = useState(1);
  const changePage = (current) => {
    if (current > 0 && current < paginate + 1) {
      setPaginado(paginado.slice((current - 1) * quantity, quantity * current));
      setCurrent(current);
    }
  };
  useEffect(() => {
    changePage(1);
    get_recipe();
  }, [recipes]);
  return (
    <div>
      <button
        className={`button ${current === 1}`}
        onClick={() => changePage(1)}
      >
        begin
      </button>
      <button
        className={`button ${current === 1}`}
        onClick={() => changePage(current - 1)}
      >
        previous
      </button>
      <button>{current}</button>
      <button
        className={`button ${current === total}`}
        onClick={() => changePage(current + 1)}
      >
        next
      </button>
      <button
        className={`button ${current === total}`}
        onClick={() => changePage(paginate)}
      >
        end
      </button>
    </div>
  );
}
