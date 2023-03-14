import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Heading,
	Text,
	Flex,
	Button,
	Stack,
	FormLabel,
	Input,
	FormErrorMessage,
	FormControl,
	Select,
} from "@chakra-ui/react"
import React from "react"

import { useFormik } from "formik"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
import Patients from "components/PatientWrapper"
import patients from "data/patients.json"
export default function Home() {
	const navigate = useNavigate()
	const schema = yup.object().shape({
		full_name: yup.string().required("full name is required"),
		// date_of_birth: yup.date().required(""),
		gender: yup.string().required("Gender is required"),
		age: yup.number().required("Age is required"),
		genotype: yup.string().required("Genotype is required"),
		bloodgroup: yup.string().required("Blood Group is required"),
	})

	const form = useFormik({
		validationSchema: schema,
		initialValues: {
			full_name: "",
			age: 0,
			genotype: "",
			bloodgroup: "",
			// date_of_birth: "",
			gender: "",
		},
		onSubmit: (values) => {
			console.log(values)
			navigate("/dashboard/text", { state: { patient: values } })
		},
	})
	return (
		<Flex
			gap={7}
			wrap="wrap"
			// justifyContent="space-between"
			// templateColumns="repeat(auto-fill, 3fr)"
		>
			<Patients
				showText
				patients={patients}
				onSelect={({ age, name, gender, genotype, bloodGroup }) => {
					// console.log(age, name, gender, bloodGroup, genotype)
					form.setValues({
						age,
						full_name: name,
						gender,
						genotype: genotype,
						bloodgroup: bloodGroup,
					})
				}}
			/>

			<Card w="lg">
				<form onSubmit={form.handleSubmit}>
					<CardHeader>
						<Heading size="md">INPUT PATIENT PROFILE</Heading>
					</CardHeader>
					<CardBody>
						<Stack spacing={4} w={"full"} maxW={"md"}>
							<Stack direction={["column", "row"]} spacing="24px" mb="10px">
								<FormControl id="full_name" isInvalid={form.errors.full_name}>
									<FormLabel>Full Name</FormLabel>
									<Input
										type="text"
										placeholder="Enter full name"
										value={form.values.full_name}
										onChange={form.handleChange}
										name="full_name"
									/>
									<FormErrorMessage>{form.errors.full_name}</FormErrorMessage>
								</FormControl>
							</Stack>

							<Stack direction={["column", "row"]} spacing="24px" mb="10px">
								<FormControl id="age" mb="10px" isInvalid={form.errors.age}>
									<FormLabel>Age</FormLabel>
									<Input
										type="age"
										placeholder="Enter age"
										value={form.values.age}
										onChange={form.handleChange}
										name="age"
									/>
									<FormErrorMessage>{form.errors.age}</FormErrorMessage>
								</FormControl>
							</Stack>

							<Stack direction={["column", "row"]} spacing="24px" mb="10px">
								<FormControl id="gender" isInvalid={form.errors.gender}>
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
									<FormErrorMessage>{form.errors.gender}</FormErrorMessage>
								</FormControl>
							</Stack>

							<Stack direction={["column", "row"]} spacing="24px" mb="10px">
								<FormControl id="bloodgroup" isInvalid={form.errors.bloodgroup}>
									<FormLabel>Bloodgroup</FormLabel>
									<Input
										placeholder="Enter bloodgroup"
										value={form.values.bloodgroup}
										onChange={form.handleChange}
										name="bloodgroup"
									/>
									<FormErrorMessage>{form.errors.bloodgroup}</FormErrorMessage>
								</FormControl>
							</Stack>

							<Stack direction={["column", "row"]} spacing="24px" mb="10px">
								<FormControl id="genotype" isInvalid={form.errors.genotype}>
									<FormLabel>Genotype</FormLabel>
									<Input
										placeholder="Enter genotype"
										value={form.values.genotype}
										onChange={form.handleChange}
										name="genotype"
									/>
									<FormErrorMessage>{form.errors.genotype}</FormErrorMessage>
								</FormControl>
							</Stack>
						</Stack>
					</CardBody>
					<CardFooter>
						<Button type="submit">SUBMIT</Button>
					</CardFooter>
				</form>
			</Card>
		</Flex>
	)
}
