// import UserForm from "../UserForm/UserForm";

// import LangSwitcher from "../LangSwitcher/LangSchwitcher";

// import { useState } from "react";
import OrderForm from "../OrderForm/OrderForm";
// import TextInput from "../TextInput/TextInput";

export default function App() {
  // const addNewUser = (newUser) => {
  //   console.log(newUser);
  // };

  // const [inputValue, setInputValue] = useState("qwe");

  // const handleChangeInputValue = (newValue) => {
  //   setInputValue(newValue);
  // };

  // const [selectLang, setSelectLang] = useState("en");

  // const handleSelectLang = (newLang) => {
  //   setSelectLang(newLang);
  // };

  const handleSelectTShirt = (newTShirt) => {
    console.log(newTShirt);
  };

  return (
    <>
      <div>
        {/* <UserForm onAdd={addNewUser} /> */}
        {/* <TextInput value={inputValue} onChange={handleChangeInputValue} /> */}
        {/* <LangSwitcher value={selectLang} onSelect={handleSelectLang} /> */}
        {/* <p>Current lang: {selectLang}</p> */}
        <OrderForm onSelect={handleSelectTShirt} />
      </div>
    </>
  );
}
