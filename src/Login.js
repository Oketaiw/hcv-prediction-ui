import React from "react";
import { useNavigate } from 'react-router-dom';
import {
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Stack,
	// InputGroup,
	// InputRightElement,
	Show,
	Text,
	FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Login() {
	const navigate = useNavigate()
	const schema = yup.object().shape({
		password: yup.string().required("Password is required"),
		email: yup
			.string()
			.required("Email is required"),
	});

	const form = useFormik({
		validationSchema: schema,
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			navigate("/dashboard/app")
			console.log(values);
		},
	});

	return (
		<Stack
			minH={"100vh"}
			direction={{ base: "column", md: "row" }}
		>
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
			backgroundColor={"ass.100"}
				p={8}
				flex={1}
				align={"center"}
				justify={"center"}
			>
				<Stack spacing={4} w={"full"} maxW={"md"}>
					<Heading fontSize={"2xl"}>
						Sign in to your account
					</Heading>
					<form onSubmit={form.handleSubmit}>
						<FormControl id="email">
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
								colorScheme={"purple"}
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
