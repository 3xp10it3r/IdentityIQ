import axios from "axios";
import { CountryItemType } from "./types";
import { DataType } from "@/app/page";

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const fetchAge = async (name: string) => {
  try {
    const response = await axios.get(`https://api.agify.io?name=${name}`);
    return response?.data?.age;
  } catch (error) {
    console.error("Error:", error);
  }
};

const fetchGender = async (name: string) => {
  try {
    const response = await axios.get(`https://api.genderize.io?name=${name}`);
    return response?.data?.gender;
  } catch (error) {
    console.error("Error:", error);
  }
};

const fetchCountry = async (name: string) => {
  try {
    const response = await axios.get(`https://api.nationalize.io?name=${name}`);
    const countries: CountryItemType[] = response.data.country;
    return countries?.sort((a, b) => b?.probability - a?.probability)?.[0]
      ?.country_id;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getUserData = async (name: string) => {
  try {
    const [ageResult, genderResult, countryResult] = await Promise.all([
      fetchAge(name),
      fetchGender(name),
      fetchCountry(name),
    ]);

    const successfulResults: DataType = {
      age: ageResult,
      gender: genderResult,
      country: countryResult,
    };
    return successfulResults;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
