"use client";
import { useState } from "react";
import { Button, Input } from "./_components";
import { getUserData } from "@/utils/helper";
import IdentityCard from "./_components/IdentityCard";

export type DataType = {
  age: string | null | undefined;
  gender: string | null | undefined;
  country: string | null | undefined;
};

export default function Home() {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DataType | undefined>();

  const guessDetails = async () => {
    setIsLoading(true);
    getUserData(name)
      .then((results) => {
        setData(results);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (value: string) => {
    if (data) setData(undefined);
    setName(value);
  };

  return (
    <div className="flex mt-40 justify-center h-screen ">
      <div className="flex flex-col items-center w-[30%] gap-4">
        <Input value={name} onChange={(e) => handleChange(e.target.value)} />
        <Button
          onClick={() => guessDetails()}
          title="Guess"
          isLoading={isLoading}
          isDisabled={isLoading}
        />
        <IdentityCard data={data} name={name} loading={isLoading} />
      </div>
    </div>
  );
}
