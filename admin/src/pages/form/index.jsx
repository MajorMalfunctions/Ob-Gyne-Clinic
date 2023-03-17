import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Formik } from "formik";
import * as yup from 'yup';
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const mobileRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const handleFormSubmit = (values) => {
        console.log(values);
    };
    const initialValues = {
        fullName: "",
        email: "",
        mobile: "",
        age: "",
        dob: "",
        address: "",
    };
    const checkoutSchema = yup.object().shape({
        fullName:yup.string().required("Required"),
        lastName:yup.string().required("Required"),
        email:yup.string().email("Invalid email!").required("Required"),
        mobile:yup.string().matches(mobileRegExp, "Phone number is not valid!").required("Required"),
        age:yup.string().required("Required"),
        dob:yup.string().required("Required"),
        address:yup.string().required("Required"),

    })


    return (
        <Box m="20px">
          <Header title="Create Patient" subtitle="Create a New Patient Profile" />

          <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit,}) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Full Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.fullName}
                    name="fullName"
                    error={!!touched.fullName && !!errors.fullName}
                    helperText={touched.fullName && errors.fullName}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Contact Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.mobile}
                    name="mobile"
                    error={!!touched.mobile && !!errors.mobile}
                    helperText={touched.mobile && errors.mobile}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Age"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.age}
                    name="age"
                    error={!!touched.age && !!errors.age}
                    helperText={touched.age && errors.age}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="date"
                    // label="Birth Date"
                    placeholder=""
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.dob}
                    name="dob"
                    error={!!touched.dob && !!errors.dob}
                    helperText={touched.dob && errors.dob}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    name="address"
                    error={!!touched.address && !!errors.address}
                    helperText={touched.address && errors.address}
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New Patient
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      );
}

export default Form