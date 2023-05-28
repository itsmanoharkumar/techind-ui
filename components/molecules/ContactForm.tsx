import { useEffect, useState } from "react";
import { saveContactUsForm } from "@/service/service";

interface Props {}

export default function ContactForm({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    if (name && email && phoneNumber) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, phoneNumber]);

  async function handleSubmit() {
    if (!name || !email || !phoneNumber) {
      return;
    }
    const data = {
      name,
      email,
      mobile: phoneNumber,
    };
    try {
      const response = await saveContactUsForm({ data });
    } catch (e: any) {
      setError(e.message);
    }

    console.log(name, email, phoneNumber);
  }

  return (
    <div className={"flex flex-col gap-y-5"}>
      <input
        className={"border border-solid border-gray-300 rounded p-2"}
        placeholder={"Name*"}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={"border border-solid border-gray-300 rounded p-2"}
        placeholder={"Email*"}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={"border border-solid border-gray-300 rounded p-2"}
        placeholder={"Phone number*"}
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button
        disabled={isDisabled}
        className={
          (isDisabled ? "bg-gray-300 " : "bg-[#3D82EA] ") +
          " border border-solid border-transparent rounded p-2 text-white font-bold text-[16px]"
        }
        onClick={handleSubmit}
      >
        Send
      </button>
      <div>{error && <div className={"text-red-600"}>{error}</div>}</div>
    </div>
  );
}
