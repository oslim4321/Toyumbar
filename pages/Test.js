import { PublicRequest } from "../utils/Registration/RequestMethod";

const Test = () => {
  const user = {
    email: "adewaleselim@gmail.com",
    name: "selim",
    age: 22,
  };
  const getUser = async () => {
    try {
      const res = await PublicRequest.post("api/signin", user);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      Test
      <button className="border p-4" onClick={getUser}>
        Send Data
      </button>
    </section>
  );
};

export default Test;
