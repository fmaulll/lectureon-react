import { UserTypes } from "../type";
import useValidateEmail from "./useValidateEmail";

export const useValidateForm = (data: UserTypes) => {
    const error = []
    if (Object.values(data).includes("")){
        error.push("Input can't be empty!")
    }

    if (data.username.length < 4 || data.username.includes(" ")) {
        error.push("Username must be 4 letters long & not containing empty space!")
    }

    if (!useValidateEmail(data.email)) {
        error.push("Email is not valid!")
    }

    if (data.password.length < 8) {
        error.push("Password must contain 8 characters minimum!")
    }

    return error
}