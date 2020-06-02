import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";
/* FORMIK AND YUP PACKEGES */
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <Formik
      initialValues={{
       
        email: "",
        password: "",

       
      }}
      /* Use Formiks validations schema to validate the form submit, here am using yup for input field validations */
      validationSchema={
            Yup.object({
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
              password: Yup.string()
                .required("Password is required"),
            })
      }
      onSubmit={async (values, { setSubmitting }) => {
      
                    
         console.log(JSON.stringify(values));
         
    
        setTimeout(() => {
                           
          setSubmitting(false);
        }, 400);
      }}
      validator={() => ({})}
    >
      {(formik) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = formik;
        return (
          <div>
            <Header
              absolute
              color="transparent"
              brand="Material Kit React"
              rightLinks={<HeaderLinks />}
              {...rest}
            />
            <div
              className={classes.pageHeader}
              style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
            >
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes[cardAnimaton]}>
                      {/* use onSubmit to call formik handle for submit */}
                      <form
                        className={classes.form}
                        onSubmit={formik.handleSubmit}
                      >
                        <CardHeader
                          color="primary"
                          className={classes.cardHeader}
                        >
                          <h4>Login</h4>
                          <div className={classes.socialLine}>
                            <Button
                              justIcon
                              href="#pablo"
                              target="_blank"
                              color="transparent"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className={"fab fa-twitter"} />
                            </Button>
                            <Button
                              justIcon
                              href="#pablo"
                              target="_blank"
                              color="transparent"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className={"fab fa-facebook"} />
                            </Button>
                            <Button
                              justIcon
                              href="#pablo"
                              target="_blank"
                              color="transparent"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className={"fab fa-google-plus-g"} />
                            </Button>
                          </div>
                        </CardHeader>
                        <p className={classes.divider}>Or Be Classical</p>

                        <CardBody>
                          <div>
                            <TextField
                              id="email"
                              name="email"
                              label="Email"
                              required
                              fullWidth
                              {...formik.getFieldProps("email")}
                              error={errors.email && touched.email}
                              onBlur={handleBlur}
                              helperText={
                                errors.email && touched.email && errors.email
                              }
                            />
                          </div>

                          <div>
                            <TextField
                              id="password"
                              name="password"
                              label="Password"
                              required
                              fullWidth
                              type="password"
                              {...formik.getFieldProps("password")}
                              error={errors.password && touched.password}
                              onBlur={handleBlur}
                              helperText={
                                errors.password &&
                                touched.password &&
                                errors.password
                              }
                            />
                          </div>
                        </CardBody>

                        <CardFooter className={classes.cardFooter}>
                          <Button
                            simple
                            color="primary"
                            tabIndex="3"
                            size="lg"
                            type="submit"
                            disabled={!formik.dirty || formik.isSubmitting}
                          >
                            Login
                          </Button>
                         
                        </CardFooter>
                      </form>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
              <Footer whiteFont />
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
