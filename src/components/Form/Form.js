import { useContext, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { signInFields, signUpFields } from "../../constants/inputFields";
import { signIn } from "../../services/authApi";
import { signUp } from "../../services/userApi";
import { ButtonStyle, FormStyle, InputStyle } from "./FormStyle";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../contexts/UserContext";

export default function Form({ type }) {
  const fields = type === "Login" ? signInFields : signUpFields;
  const fieldsForm = {};
  fields.forEach((field) => (fieldsForm[field.name] = ""));
  const [bodyForm, setBody] = useState(fieldsForm);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext)

  function handleForm(e) {
    setBody({ ...bodyForm, [e.target.name]: e.target.value });
  }

  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);

    try {
      if (type === "Login") {
        const response = await signIn(bodyForm);
        setUserData(response);
        //localStorage.setItem("userData", JSON.stringify(response.data));
        toast("Successful Login!");
        navigate("/menu");
      } else {
        await signUp(bodyForm);
        toast("Successful Registration!");
        navigate("/");
      }
    } catch (error) {
      toast(`Unable to ${type}`);
      //console.log(error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <FormStyle onSubmit={submitForm}>
        {fields.map((field, index) => (
          <InputStyle
            key={index}
            placeholder={field.placeholder}
            name={field.name}
            type={field.type}
            value={bodyForm[field]}
            onChange={handleForm}
            isLoading={isLoading}
            disabled={isLoading}
            required
          />
        ))}

        <ButtonStyle isLoading={isLoading} disabled={isLoading} type="submit">
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="42"
            />
          ) : (
            "Continue"
          )}
        </ButtonStyle>
      </FormStyle>
      <ToastContainer autoClose={3000} />
    </>
  );
}
