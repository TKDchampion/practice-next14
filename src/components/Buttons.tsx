"use client";

const clickEvent = (e: any) => {
  console.log(e);
};

export default function Buttons() {
  return <button onClick={(e) => clickEvent(e)}>go</button>;
}
