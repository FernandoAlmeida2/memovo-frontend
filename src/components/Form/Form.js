import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { ButtonStyle, FormStyle, InputStyle } from "./FormStyle";

export default function Form({ fields, type }) {
  const fieldsForm = {};
  fields.forEach((element) => (fieldsForm[element] = ""));
  const [bodyForm, setBody] = useState(fieldsForm);
  const [isLoading, setLoading] = useState(false);

  function handleForm(e) {
    setBody({ ...bodyForm, [e.target.name]: e.target.value });
  }

  function submitLogin(e) {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <FormStyle onSubmit={submitLogin}>
      {fields.map((field, index) => (
        <InputStyle
          key={index}
          placeholder={field}
          name={field}
          type={field}
          value={bodyForm[field]}
          onChange={handleForm}
          isLoading={isLoading}
          disabled={isLoading}
          required
        />
      ))}

      <ButtonStyle isLoading={isLoading} disabled={isLoading}>
        {isLoading ? (
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="42"
          />
        ) : (
          type
        )}
      </ButtonStyle>
    </FormStyle>
  );
}
