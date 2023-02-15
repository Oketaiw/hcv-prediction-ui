import React from 'react'
import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
	// InputGroup,
	// InputRightElement,
	FormErrorMessage,
        Card,
            CardBody,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
export default function Hcvtest() {
    const schema = yup.object().shape({
		password: yup.string().required("Password is required"),
		email: yup
			.string()
			.email()
			.required("Email is required"),
		});
	const form = useFormik({
		validationSchema: schema,
		initialValues: {
			email: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});
  return (
    <Card w="lg">
        				<CardBody>
                        <Stack
			minH={"100vh"}
			direction={{ base: "column", md: "row" }}
		>
    <Flex
    p={10}
        flex={1}
        justify={"flex-start"}
    >
        <Stack spacing={4} w={"full"} maxW={"md"}>
            <form onSubmit={form.handleSubmit}>
                <Stack
                    direction={["column", "row"]}
                    spacing="24px"
                    mb="10px"
                ></Stack>
                <FormControl
                    id="email"
                    mb="10px"
                    isInvalid={form.errors.email}
                >
                    <FormLabel>Albumin test</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter result"
                        value={form.values.email}
                        onChange={form.handleChange}
                        name="email"
                        
                    />
                    <FormErrorMessage>
                        {form.errors.email}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    id="email"
                    mb="10px"
                    isInvalid={form.errors.email}
                >
                    <FormLabel>Alkaline phosphatase test</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter result"
                        value={form.values.email}
                        onChange={form.handleChange}
                        name="email"
                    />
                    <FormErrorMessage>
                        {form.errors.email}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    id="email"
                    mb="10px"
                    isInvalid={form.errors.email}
                >
                    <FormLabel>Alanine aminotransferase test </FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter result"
                        value={form.values.email}
                        onChange={form.handleChange}
                        name="email"
                    />
                    <FormErrorMessage>
                        {form.errors.email}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    id="email"
                    mb="10px"
                    isInvalid={form.errors.email}
                >
                    <FormLabel>Aspartate aminotransferase test</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter result"
                        value={form.values.email}
                        onChange={form.handleChange}
                        name="email"
                    />
                    <FormErrorMessage>
                        {form.errors.email}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    id="email"
                    mb="10px"
                    isInvalid={form.errors.email}
                >
                    <FormLabel>Bilirubin</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter result"
                        value={form.values.email}
                        onChange={form.handleChange}
                        name="email"
                    />
                    <FormErrorMessage>
                        {form.errors.email}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    id="email"
                    mb="10px"
                    isInvalid={form.errors.email}
                >
                    <FormLabel>Cholinesterase test</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter result"
                        value={form.values.email}
                        onChange={form.handleChange}
                        name="email"
                    />
                    <FormErrorMessage>
                        {form.errors.email}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    id="email"
                    mb="10px"
                    isInvalid={form.errors.email}
                >
                    <FormLabel>Cholesterol test</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter result"
                        value={form.values.email}
                        onChange={form.handleChange}
                        name="email"
                    />
                    <FormErrorMessage>
                        {form.errors.email}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    id="email"
                    mb="10px"
                    isInvalid={form.errors.email}
                >
                    <FormLabel>Creatinine test</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter result"
                        value={form.values.email}
                        onChange={form.handleChange}
                        name="email"
                    />
                    <FormErrorMessage>
                        {form.errors.email}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    id="email"
                    mb="10px"
                    isInvalid={form.errors.email}
                >
                    <FormLabel>Gamma glutamyl transferase</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter result"
                        value={form.values.email}
                        onChange={form.handleChange}
                        name="email"
                    />
                    <FormErrorMessage>
                        {form.errors.email}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    id="email"
                    mb="10px"
                    isInvalid={form.errors.email}
                >
                    <FormLabel>Protein test</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter result"
                        value={form.values.email}
                        onChange={form.handleChange}
                        name="email"
                    />
                    <FormErrorMessage>
                        {form.errors.email}
                    </FormErrorMessage>
                </FormControl>
                <Button> SUBMIT </Button>
                </form>
                </Stack>
    </Flex>
   
   </Stack>
                        </CardBody>

    </Card>

  )}
