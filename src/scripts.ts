import $ from "jquery";
import { nameValidate } from "./utils/name-validate/nameValidate";
import { eMailValidate } from "./utils/e-mailValidate/e-mailVlaidate";
import { passwordValidate } from "./utils/passwordValidate/passwordValidate";

$(".container").html(`
    <div class="container--for--toast">
        <div id="toast" class="hidden">
        </div>
      
        <div id="toast-ivalid">
        </div>
    </div>  

<form class="form" action="" method="">
    <label for="username">Username:<button class="username-i btn-style">i</button></label>
    <input class="user-name-input" type="text" placeholder="username">
    <label for="email">E-mail:<button class="email-i btn-style">i</button></label>
    <input class="e-mail-input" type="email" placeholder="e-mail">
    <label for="password">Password:<button class="password-i btn-style">i</button></label>
    <input class="password-input" type="password" placeholder="Type password">
    <button class="submit-button" type="button" id="submitBtn">Submit</button>
    </form>


`);

const showValidToast = () => {
  const toast = $("#toast");
  toast.addClass("show");
  toast.html(`Form is valid! 🎉`);
  setTimeout(() => {
    toast.removeClass("show");
  }, 3000);
};

const showInvalidToast = (str: string) => {
  const toast = $("#toast-ivalid");
  toast.addClass("show");
  toast.html(`${str}`);
  setTimeout(() => {
    toast.removeClass("show");
  }, 5000);
};

$("#submitBtn").on("click", () => {
  const username: string = $<HTMLInputElement>(
    ".user-name-input"
  ).val() as string;
  if (nameValidate(username)) {
    showValidToast();
    console.log("Username Validation passed. Submitting form...");
    $(".user-name-input").val("");
  } else {
    showInvalidToast(`Invalid form! 😩 <br> Problem in username...`);
    console.log("Username Validation failed. Please enter a valid username.");
    $(".user-name-input").val("");
  }

  const eMail: string = $<HTMLInputElement>(".e-mail-input").val() as string;
  if (eMailValidate(eMail)) {
    showValidToast();
    console.log("E-mail Validation passed. Submitting form...");
    $(".e-mail-input").val("");
  } else {
    showInvalidToast(`Invalid form! 😩 <br> Problem in E-mail...`);
    console.log("E-mail Validation failed. Please enter a valid username.");
    $(".e-mail-input").val("");
  }

  const passW: string = $<HTMLInputElement>(".password-input").val() as string;
  if (passwordValidate(passW)) {
    showValidToast();
    console.log("Password Validation passed. Submitting form...");
    $(".password-input").val("");
  } else {
    showInvalidToast(`Invalid form! 😩 <br> Problem in Password...`);
    console.log("E-mail Validation failed. Please enter a valid username.");
    $(".password-input").val("");
  }

  if (username === "" || eMail === "" || passW === "") {
    showInvalidToast(`Please fill in all input fields!`);
  }
});

const alertInfo = (str: string) => {
  alert(str);
};

const usernameInfo = $(".username-i").on("click", () => {
  alertInfo(
    "The name must have at least 2 characters and can only contain letters. Max 50 characters."
  );
});

const eMailinfo = $(".email-i").on("click", () => {
  alertInfo("The email must be in a valid format (e.g. example@example.com).");
});

const passwrodInfo = $(".password-i").on("click", () => {
  alertInfo(
    "The password must be at least 8 characters long and must contain at least 1 number 1 special character (!, @, #, $, %, ^, &, *) and one capital letter."
  );
});
