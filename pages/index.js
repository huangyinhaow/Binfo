import { useState } from "react";

function Home() {
  let [cid, setCid] = useState("");
  async function R(event) {
    event.preventDefault();
    let id = event.target.id.value;
    let url = String("api/getCid?id=" + id);
    cid = await fetch(url);
    cid = await cid.json();
    cid = String(cid.cid);
    console.log(cid);
    setCid(cid);
  }
  function Form() {
    return (
      <form onSubmit={R}>
        <input name="id"></input>
        <button type="submit">Get</button>
      </form>
    );
  }
  return (
    <>
      <Form />
      <p>CID: {cid}</p>
    </>
  );
}

export default Home;
