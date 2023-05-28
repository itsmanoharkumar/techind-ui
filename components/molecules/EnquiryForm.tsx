import { useEffect, useState } from "react";
import { saveEnquiry } from "@/service/service";

interface Props {}

export default function EnquiryForm({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    setError("");
    if (name && email && phoneNumber && projectBrief && country) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, phoneNumber, projectBrief, country]);

  async function handleSubmit() {
    setIsDisabled(true);
    if (!name || !email || !phoneNumber || !projectBrief || !country) {
      return;
    }
    const data = {
      name,
      email,
      mobile: phoneNumber,
      country,
      projectBrief,
    };
    try {
      const response = await saveEnquiry({ data });
      setSuccess("Enquiry submitted successfully");
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsDisabled(false);
    }

    console.log(name, email, phoneNumber);
  }

  return (
    <div className={"flex flex-col gap-y-5"}>
      <input
        className={"border border-solid border-gray-300 rounded p-2"}
        placeholder={"Full Name"}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={"border border-solid border-gray-300 rounded p-2"}
        placeholder={"Email Address"}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={"border border-solid border-gray-300 rounded p-2"}
        placeholder={"Phone number"}
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        className={"border border-solid border-gray-300 rounded p-2"}
        placeholder={"Country"}
        type="text"
        onChange={(e) => setCountry(e.target.value)}
      />
      <textarea
        rows={5}
        className={"border border-solid border-gray-300 rounded p-2"}
        placeholder={"Project Brief"}
        onChange={(e) => setProjectBrief(e.target.value)}
      />
      <button
        disabled={isDisabled}
        className={
          (isDisabled ? "bg-gray-300 " : "bg-[#3D82EA] ") +
          " border border-solid border-transparent rounded p-2 text-white font-bold text-[16px]"
        }
        onClick={handleSubmit}
      >
        Enquiry Now
      </button>
      <div>
        {error && <div className={"text-red-600"}>{error}</div>}
        {success && <div className={"text-green-600"}>{success}</div>}
      </div>
    </div>
  );
}
