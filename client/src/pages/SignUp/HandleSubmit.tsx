import axios from "axios";

export interface FormData {
  username: string;
  email: string;
  password: string;
  isAdminAccount: string;
}

export const HandleSubmit = async (
  e: { preventDefault: () => void },
  formData: FormData
) => {
  e.preventDefault();

  try {
    const response = await axios.post("/api/auth/sign-up", formData);
    console.log(response.data);
  } catch (error: any) {
    console.error(error.message);
  }
};
