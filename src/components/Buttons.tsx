"use client";

import {
  deleteServerSideFakeFtnRromise,
  getServerSideFakeFtnRromise,
  postServerSideFakeFtnRromise,
  putServerSideFakeFtnRromise,
} from "@/services/fake";

const clickGetEvent = (e: any) => {
  getServerSideFakeFtnRromise().then(
    (resp) => {
      console.log(resp);
    },
    (err) => console.log(err)
  );
};

const clickPostEvent = (e: any) => {
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

const clickPutEvent = (e: any) => {
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

const clickDeleteEvent = (e: any) => {
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
      <button onClick={(e) => clickGetEvent(e)}>GET</button>
      <button onClick={(e) => clickPostEvent(e)}>POST</button>
      <button onClick={(e) => clickPutEvent(e)}>PUT</button>
      <button onClick={(e) => clickDeleteEvent(e)}>DELETE</button>
    </main>
  );
}
