import Image from "next/image";
import Button from "./components/buttons/Button";
import Input from "./components/Input/Input";
import { ChangeEvent } from "react";

export default function Home() {
  return (
    <>
      <Input type="text" placeholder="Input Here" value={""} />
      <Button title="Click Me" />
    </>
  );
}
