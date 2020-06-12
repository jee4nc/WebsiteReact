import emailjs from "emailjs-com";
import swal from "sweetalert";

export default function sendEmail(e) {
  e.preventDefault();
  console.log(e);
  emailjs
    .sendForm("gmailj", "test1", e.target, "user_zWOk6AlMRHvU5HEskUp4D")
    .then(
      (result) => {
        console.log(result.text);
        if (result.text === "OK") {
          swal(
            "Email enviado!",
            "Nos contactaremos contigo a la brevedad!",
            "success"
          );
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
}
