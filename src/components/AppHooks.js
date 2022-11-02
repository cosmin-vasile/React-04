import React, { useEffect, useState } from "react";

const TempApp = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return "tempapp";
};

const AppHooks = (props) => {
  const { sort, filters } = props;
  const [count, setCount] = useState(0);

  const getUsersList = (sort, filters) => {
    //fetch();
  };

  useEffect(() => {
    getUsersList(sort, filters);
  }, [sort, filters]);

  useEffect(() => {
    return () => {
      console.log("clean up - no deps");
    };
  });

  useEffect(() => {
    console.log("useeEffect - []");

    return () => {
      console.log("clean up - []");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect - [count]");

    return () => {
      console.log("clean up - [count]");
    };
  }, [count]);

  const onDecrementClick = () => {
    setCount(count - 1);
  };

  const onIncrementClick = () => {
    setCount(count + 1);
  };

  if (count === 1) {
    return null;
  }

  return (
    <div>
      {count === 1 ? <TempApp /> : null}
      <button onClick={onDecrementClick}>-</button>
      {count}
      <button onClick={onIncrementClick}>+</button>
    </div>
  );
};

export default AppHooks;
