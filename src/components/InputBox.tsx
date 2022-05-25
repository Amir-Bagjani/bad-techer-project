import React, { useRef, useState } from "react";

type InPutOwnProps<E extends React.ElementType> = {
  label: string;
  as?: E;
};

type InputBoxProps<E extends React.ElementType> = InPutOwnProps<E> &
  React.ComponentProps<E>;

const InputBox = <E extends React.ElementType = "input">({
  label,
  as,
  ...rest
}: InputBoxProps<E>) => {
  const Tag = as || "input";
  const tagRef = useRef<HTMLInputElement>(null !);
  const [showPass, setShowPass] = useState(false)

  const handleShowPass = () => {
    if(!showPass) {
      tagRef.current.type = "text" ;
      setShowPass(true)
    }else{
      tagRef.current.type = "password";
      setShowPass(false)
    }
  }

  return (
    <div className="inputBox">
      <Tag {...rest} ref={tagRef} />
      {as === "input" && rest.type === "password" && (
        <i onClick={handleShowPass} className={showPass ? "fas fa-eye-slash" : "fas fa-eye"}></i>
      )}
      <label>{label}</label>
    </div>
  );
};

export default InputBox;
