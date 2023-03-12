import { Card, CardBody, CardHeader, CardFooter, Heading, Text,Flex,Button,Stack,FormLabel,Input,FormErrorMessage,FormControl,Select } from '@chakra-ui/react';
import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
export default function Home() {
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
			full_name: "",
			age: "",
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
	

	
		<Flex 
		gap={7}
		wrap="wrap"
		                   // justifyContent="space-between"
						   // templateColumns="repeat(auto-fill, 3fr)"
						   >

<Card w="xs" backgroundColor='white'>
								<CardBody>

								<Text>
										View a summary of all your customers over the last month
									</Text>
                               									
							<CardHeader><Card backgroundColor='lightblue' h='12' w='20vw'><Heading size='md'>MEDICAL HISTORY</Heading></Card></CardHeader>

										
						<CardHeader><Card backgroundColor='lightblue' w='20vw' h='12' size='md'><Heading size="md">
										PATIENTS</Heading>
									<Text>Search</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Oke T.</b>
									</Text> 
									<Text>42 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Iyiade S.</b>
									</Text>
									<Text>21 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
									Obatimehin R.</b>
									</Text>
									<Text>22 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Ilekoya D.</b>
									</Text>
									<Text>14 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										GeorgE E.</b>
									</Text>
									<Text>19 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Oduwole O.</b>
									</Text>
									<Text>27 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Olaiya K.</b>
									</Text>
									<Text>31 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Adeleye M.</b>
									</Text>
									<Text>34 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Raji I.</b>
									</Text>
									<Text>22 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Ayodele A.</b>
									</Text>
									<Text>20 years</Text>
									</Card></CardHeader>
									
									</CardBody>
									</Card>

							<Card w="lg">
								<CardHeader>
									<Heading size="md">INPUT PATIENT PROFILE</Heading>
									</CardHeader>
									<CardBody>
									<Stack spacing={4} w={"full"} maxW={"md"}>
									
									
						<Stack
							direction={["column", "row"]}
							spacing="24px"
							mb="10px"
						>
							<FormControl
								id="full_name"
								isInvalid={form.errors.full_name}
							>
								<FormLabel>Full Name</FormLabel>
								<Input
									type="text"
									placeholder="Enter full name"
									value={form.values.full_name}
									onChange={form.handleChange}
									name="full_name"
								/>
								<FormErrorMessage>
									{form.errors.full_name}
								</FormErrorMessage>
							</FormControl>
						</Stack>

						<Stack
							direction={["column", "row"]}
							spacing="24px"
							mb="10px"
						>
						<FormControl
							id="age"
							mb="10px"
							isInvalid={form.errors.age}
						>
							<FormLabel>Age</FormLabel>
							<Input
								type="age"
								placeholder="Enter age"
								value={form.values.age}
								onChange={form.handleChange}
								name="age"
							/>
							<FormErrorMessage>
								{form.errors.age}
							</FormErrorMessage>
						</FormControl>
                       </Stack>




						<Stack
							direction={["column", "row"]}
							spacing="24px"
							mb="10px"
						>
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


                            <Stack
							direction={["column", "row"]}
							spacing="24px"
							mb="10px"
						>
						<FormControl
							id="bloodgroup"
							isInvalid={form.errors.bloodgroup}
						>
							<FormLabel>Bloodgroup</FormLabel>
							<Input
								
								placeholder="Enter bloodgroup"
								value={form.values.bloodgroup}
								onChange={form.handleChange}
								name="bloodgroup"
							/>
							<FormErrorMessage>
								{form.errors.bloodgroup}
							</FormErrorMessage>
						</FormControl>
				</Stack>


				<Stack
							direction={["column", "row"]}
							spacing="24px"
							mb="10px"
						>
						<FormControl
							id="genotype"
							isInvalid={form.errors.genotype}
						>
							<FormLabel>Genotype</FormLabel>
							<Input
								
								placeholder="Enter genotype"
								value={form.values.genotype}
								onChange={form.handleChange}
								name="genotype"
							/>
							<FormErrorMessage>
								{form.errors.genotype}
							</FormErrorMessage>
						</FormControl>
				</Stack>


			</Stack>
									</CardBody>
									<CardFooter>
										<Button onClick={() =>navigate("/dashboard/text")
										}>SUBMIT</Button>
									</CardFooter>
									</Card>
						   </Flex>
	);					
	
}
