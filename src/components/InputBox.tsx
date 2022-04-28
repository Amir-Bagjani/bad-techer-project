import React from "react";

type InPutOwnProps<E extends React.ElementType> =  {
    label: string;
    as?: E;
} 

type InputBoxProps<E extends React.ElementType> = InPutOwnProps<E> & React.ComponentProps<E>;

const InputBox = <E extends React.ElementType = 'input'>({label, as, ...rest}: InputBoxProps<E>) => {
    const Tag = as || 'input'
  return (
    <div className="inputBox">
      <Tag {...rest} />
      <label>{label}</label>
    </div>
  );
};

export default InputBox;
