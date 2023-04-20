import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const onSubmit = (
  email,
  setEmailErrorText,
  password,
  setPasswordErrorText
) => {
  if (!email) {
    setEmailErrorText("Please enter email");
  } else {
    setEmailErrorText("");
  }
  if (!password) {
    setPasswordErrorText("Please enter password");
  } else {
    setPasswordErrorText("");
  }
};

export const handleSubmit = (
  event,
  email,
  setEmailErrorText,
  password,
  setPasswordErrorText
) => {
  event.preventDefault();
  onSubmit(email, setEmailErrorText, password, setPasswordErrorText);
  console.log("hgfh");
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
};

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
