import React, {
  Component,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const TempApp = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return "tempapp";
};

class TempCompWithClass extends Component {
  state = {
    isOpen: false,
  };
  open() {
    this.setState({
      isOpen: true,
    });
  }

  close() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return this.state.isOpen ? "is open" : "is closed";
  }
}

const TempCompWithFunction = ({ onClickCallback }) => {
  useEffect(() => {
    if (onClickCallback) {
      console.log("functia onClickCallback s-a recreat", onClickCallback);
    }
  }, [onClickCallback]);

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

  const onDecrementClick = (event) => {
    console.log(event);
    setCount(count - 1);
  };

  const onIncrementClick = () => {
    setCount(count + 1);
  };

  const a = 1;
  const b = 1;
  const sum = useMemo(() => {
    return a + b;
  }, [a, count]);

  const onClickCallback = useCallback(() => {}, []);
  const myObj = useMemo(() => {
    //logica
    return {};
  }, []);
  const myArray = useMemo(() => {
    //logica
    return [];
  }, []);

  const onDivClick = (event) => {
    console.log(event);
  };

  const divRef = useRef();
  useEffect(() => {
    if (divRef.current) {
      console.log(divRef.current);
    }
  }, [divRef.current]);

  const tempCompRef = useRef();
  useEffect(() => {
    console.log(tempCompRef.current);
  }, [tempCompRef.current]);

  const tempComptWithClassRef = useRef();
  useEffect(() => {
    console.log(tempComptWithClassRef.current);
  }, [tempComptWithClassRef.current]);

  return (
    <div onClick={onDivClick} ref={divRef}>
      <TempCompWithFunction
        ref={tempCompRef}
        onClickCallback={onClickCallback}
      />
      <TempCompWithClass ref={tempComptWithClassRef} />
      {sum || 0}
      {count === 1 ? <TempApp /> : null}
      <button onClick={onDecrementClick}>-</button>
      <span>{count}</span>
      <button onClick={onIncrementClick}>+</button>
    </div>
  );
};

export default AppHooks;
