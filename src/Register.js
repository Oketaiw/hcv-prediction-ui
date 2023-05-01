import React from "react";
import { useNavigate } from 'react-router-dom';

import {
	Button,
	Checkbox,
	Text,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Stack,
	// InputGroup,
	// InputRightElement,
	Show,
	FormErrorMessage,
	Select,
	Flex,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
export default function Register() {
	const navigate = useNavigate()
	const schema = yup.object().shape({
		password: yup.string().required("Password is required"),
		email: yup
			.string()
			.email()
			.required("Email is required"),
		first_name: yup
			.string()
			.required("First name is required"),
		last_name: yup
			.string()
			.required("Last name is required"),
		confirm_password: yup
			.string()
			.oneOf(
				[yup.ref("password"), null],
				"Passwords must match"
			),
		date_of_birth: yup.date().required(""),
		gender: yup.string().required(""),
	});

	const form = useFormik({
		validationSchema: schema,
		initialValues: {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			confirm_password: "",
			date_of_birth: "",
			gender: "",
		},
		onSubmit: (values) => {
			navigate("/login")
			console.log(values);
		},
	});
	return (
<Stack
 minH={"100vh"}
 direction={{base: "column", md: "row"}}>
	<Show above="lg">
		<Flex
		flex={1}
		p={8}
		justify="center"
		alignItems="center"
		>
			<Text fontSize="5xl">
				Welcome To Diagnosis Portal{" "}
			</Text>

		</Flex>
	</Show>
	<Flex 
	 backgroundColor={"#e8e8e8"}
	 flex={1}
	 p={8}
	 justify="center"
	 align="center"
	 >
		
			
		
				<Stack spacing={4} w={"full"} maxW={"md"}>
					<Heading fontSize={"2xl"}>Sign Up</Heading>
					<form onSubmit={form.handleSubmit}>
						<Stack
							direction={["column", "row"]}
							spacing="24px"
							mb="10px"
						>
							<FormControl
								id="first_name"
								isInvalid={form.errors.first_name}
							>
								<FormLabel>First Name</FormLabel>
								<Input
									type="text"
									placeholder="Enter first name"
									value={form.values.first_name}
									onChange={form.handleChange}
									name="first_name"
								/>
								<FormErrorMessage>
									{form.errors.first_name}
								</FormErrorMessage>
							</FormControl>

							<FormControl
								id="last_name"
								isInvalid={form.errors.last_name}
							>
								<FormLabel>Last Name</FormLabel>
								<Input
									type="text"
									placeholder="Enter last name"
									value={form.values.last_name}
									onChange={form.handleChange}
									name="last_name"
								/>
								<FormErrorMessage>
									{form.errors.last_name}
								</FormErrorMessage>
							</FormControl>
						</Stack>

						<Stack
						direction={["column", "row"]}
						spacing="24px"
						mb="10px"
						>
						<FormControl
							id="email"
							isInvalid={form.errors.email}
						>
							<FormLabel>Email</FormLabel>
							<Input
								type="email"
								placeholder="Enter email"
								value={form.values.email}
								onChange={form.handleChange}
								name="email"
							/>
							<FormErrorMessage>
								{form.errors.email}
							</FormErrorMessage>
						</FormControl>
						</Stack>

						<Stack
							direction={["column", "row"]}
							spacing="24px"
							mb="10px"
						>
							<FormControl
								id="date_of_birth"
								mb="10px"
								isInvalid={form.errors.date_of_birth}
							>
								<FormLabel>Date of Birth </FormLabel>
								<Input
									type="date"
									placeholder="Enter Date of Birth"
									value={form.values.date_of_birth}
									onChange={form.handleChange}
									name="date_of_birth"
								/>
								<FormErrorMessage>
									{form.errors.date_of_birth}
								</FormErrorMessage>
							</FormControl>
							<FormControl
								id="gender"
								isInvalid={form.errors.gender}
							>
								<FormLabel>Gender</FormLabel>
								<Select
									name="gender"
									placeholder="Select Gender"
									value={form.values.gender}
									onChange={form.handleChange}
								>
									<option value="male">Male</option>
									<option value="female">Female</option>
									
								</Select>
								<FormErrorMessage>
									{form.errors.gender}
								</FormErrorMessage>
							</FormControl>
						</Stack>

						<FormControl
							id="password"
							isInvalid={form.errors.password}
						>
							<FormLabel>Password</FormLabel>
							{/* <InputGroup size="md"> */}
							<Input
								pr="4.5rem"
								type="password"
								// type={show ? "text" : "password"}
								placeholder="Enter password"
								value={form.values.password}
								onChange={form.handleChange}
								name="password"
							/>
							{/* <InputRightElement width="4.5rem">
									<Button
										h="1.75rem"
										size="sm"
										onClick={handleClick}
									>
										{show ? "Hide" : "Show"}
									</Button>
								</InputRightElement> */}
							<FormErrorMessage>
								{form.errors.password}
							</FormErrorMessage>
							{/* </InputGroup> */}
						</FormControl>
						<Stack spacing={6}>
							<Stack
								direction={{ base: "column", sm: "row" }}
								align={"start"}
								justify={"space-between"}
							>
								<Checkbox>Remember me</Checkbox>
								<Link color={"blue.500"}>
									Forgot password?
								</Link>
							</Stack>
							<Button
								colorScheme={"blue"}
								variant={"solid"}
								type="submit"
							>
								Sign in
							</Button>
						</Stack>
					</form>
				</Stack>
			</Flex>
		</Stack>
	);
}
