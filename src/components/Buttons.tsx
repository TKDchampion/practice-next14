"use client";

import {
  deleteServerSideFakeFtnRromise,
  getServerSideFakeFtnRromise,
  postServerSideFakeFtnRromise,
  putServerSideFakeFtnRromise,
} from "@/services/fake";

const clickGetEvent = () => {
  getServerSideFakeFtnRromise().then(
    (resp) => {
      console.log(resp);
    },
    (err) => console.log(err)
  );
};

const clickPostEvent = () => {
  postServerSideFakeFtnRromise({
    userId: 11,
    id: 101,
    title: "123",
    body: "456",
  }).then(
    (resp) => {
      console.log(resp);
    },
    (err) => console.log(err)
  );
};

const clickPutEvent = () => {
  putServerSideFakeFtnRromise(
    {
      userId: 11,
      id: 101,
      title: "123",
      body: "456",
    },
    "1"
  ).then(
    (resp) => {
      console.log(resp);
    },
    (err) => console.log(err)
  );
};

const clickDeleteEvent = () => {
  deleteServerSideFakeFtnRromise("1").then(
    (resp) => {
      console.log(resp);
    },
    (err) => console.log(err)
  );
};

export default function Buttons() {
  return (
    <main>
      <button onClick={clickGetEvent}>GET</button>
      <button onClick={clickPostEvent}>POST</button>
      <button onClick={clickPutEvent}>PUT</button>
      <button onClick={clickDeleteEvent}>DELETE</button>
    </main>
  );
}
