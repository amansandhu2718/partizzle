import React, { useEffect, useState } from "react";

const Contact = () => {
  const [data, setData] = useState(null);
  const fetchURL = "http://localhost:5000/";
  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <div>
      {data?.map((item) => (
        <ul>
          <li>{item.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Contact;
