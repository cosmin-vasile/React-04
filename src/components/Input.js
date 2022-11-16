import React, {
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState,
} from "react";
import PropTypes from "prop-types";

/**
 * Creates an base input
 * @param {string} type - The type of the input
 * @returns dom element
 */
let Input = (props, ref) => {
  const { type } = props;
  //   useImperativeHandle(ref, () => {
  //     return {
  //       myCustomMethod: () => {
  //         console.log("input ref myCustomMethod");
  //         setState("new value");
  //       },
  //     };
  //   });

  const onChange = (event) => {
    //event.target.value
  };

  return (
    <div>
      <input type={type} ref={ref} onChange={onChange} />
    </div>
  );
};

Input = forwardRef(Input);

Input.propTypes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
