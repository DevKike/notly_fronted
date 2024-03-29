import { Notyf } from "notyf";

const notyf = new Notyf();

const successAlert = (str) => {
    notyf.success(str);
}

const errorAlert = (str) => {
    notyf.error(str);
}

export { successAlert, errorAlert }