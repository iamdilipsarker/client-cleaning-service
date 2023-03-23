import React, { useEffect, useState } from "react";
import fetcher from "../../api/axios.config";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/services")
    //   .then((res) => setServices(res.data));
    (async () => {
      const res = await fetcher.get("/services");
      setServices(res.data);
    })();
  }, []);
  return (
    <div>
      <h3>this is services</h3>
      <h3>this is services</h3>
      <h3>this is services</h3>
      <h3>this is services</h3>
      <h3>this is services</h3>
      <h3>this is services</h3>
      <h3>{services.price}</h3>
    </div>
  );
};

export default Services;
