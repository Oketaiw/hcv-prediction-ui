import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
	FormErrorMessage,
	Card,
	CardBody,
	
} from "@chakra-ui/react"
import { useFormik } from "formik"
import * as yup from "yup"
import Patients from "components/PatientWrapper"
import patients from "data/patients.json"
export default function Hcvtest() {
	const navigate = useNavigate()
	const patient  = useLocation().state?.patient

	async function predict(predictionInput) {
		console.log(predictionInput)
		const response = await fetch("https://pr-fabd.onrender.com/predict", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(predictionInput),
		})

		const prediction = await response.json()
		return prediction.prediction
	}
	const schema = yup.object().shape({
		alb: yup.number().required("Albumin test result is required."),
		alk: yup.number().required("Alkaline phosphatase test result is required."),
		ala: yup.number().required("ala test result is required."),
		asp: yup.number().required("asp test result is required."),
		bil: yup.number().required("bil test result is required."),
		cho: yup.number().required("cho test result is required."),
		chol: yup.number().required("chol test result is required."),
		crea: yup.number().required("crea test result is required."),
		gamma: yup.number().required("gamma test result is required."),
		prot: yup.number().required("protein test result is required."),
	})

	const form = useFormik({
		validationSchema: schema,
		initialValues: {},
		onSubmit: async (values) => {
			const age = +patient.age
			const sex = { male: 1, female: 0 }[patient.gender]
			const prediction = await predict({
				age,
				sex,
				alb: values.alb,
				alp: values.alk,
				alt: values.ala,
				ast: values.asp,
				bil: values.bil,
				che: values.cho,
				chol: values.chol,
				prot: values.prot,
				ggt: values.gamma,
				crea: values.crea,
			})

			navigate("/dashboard/result", { state: { patient, prediction } })
		},
	})
	if (!patient) {
		return (
			<div>This page was accessed incorrectly, make sure you were redirect from the home page.</div>
		)
	}
	return (
		<Flex gap={7} wrap="wrap">
			<Patients patients={patients} />
			<Card w="lg">
				<CardBody>
					<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
						<Flex p={10} flex={1} justify={"flex-start"}>
							<Stack spacing={4} w={"full"} maxW={"md"}>
								<form onSubmit={form.handleSubmit}>
									<Stack direction={["column", "row"]} spacing="24px" mb="10px"></Stack>
									<FormControl id="email" mb="10px" isInvalid={form.errors.alb}>
										<FormLabel>Albumin test</FormLabel>
										<Input
											type="number"
											placeholder="Enter result"
											value={form.values.alb}
											onChange={form.handleChange}
											name="alb"
										/>
										<FormErrorMessage>{form.errors.alb}</FormErrorMessage>
									</FormControl>

									<FormControl id="email" mb="10px" isInvalid={form.errors.alk}>
										<FormLabel>Alkaline phosphatase test</FormLabel>
										<Input
											type="number"
											placeholder="Enter result"
											value={form.values.alk}
											onChange={form.handleChange}
											name="alk"
										/>
										<FormErrorMessage>{form.errors.alk}</FormErrorMessage>
									</FormControl>

									<FormControl id="email" mb="10px" isInvalid={form.errors.ala}>
										<FormLabel>Alanine aminotransferase test </FormLabel>
										<Input
											type="number"
											placeholder="Enter result"
											value={form.values.ala}
											onChange={form.handleChange}
											name="ala"
										/>
										<FormErrorMessage>{form.errors.ala}</FormErrorMessage>
									</FormControl>

									<FormControl id="email" mb="10px" isInvalid={form.errors.asp}>
										<FormLabel>Aspartate aminotransferase test</FormLabel>
										<Input
											type="number"
											placeholder="Enter result"
											value={form.values.asp}
											onChange={form.handleChange}
											name="asp"
										/>
										<FormErrorMessage>{form.errors.asp}</FormErrorMessage>
									</FormControl>

									<FormControl id="email" mb="10px" isInvalid={form.errors.bil}>
										<FormLabel>Bilirubin</FormLabel>
										<Input
											type="number"
											placeholder="Enter result"
											value={form.values.bil}
											onChange={form.handleChange}
											name="bil"
										/>
										<FormErrorMessage>{form.errors.bil}</FormErrorMessage>
									</FormControl>

									<FormControl id="email" mb="10px" isInvalid={form.errors.cho}>
										<FormLabel>Cholinesterase test</FormLabel>
										<Input
											type="number"
											placeholder="Enter result"
											value={form.values.cho}
											onChange={form.handleChange}
											name="cho"
										/>
										<FormErrorMessage>{form.errors.cho}</FormErrorMessage>
									</FormControl>

									<FormControl id="email" mb="10px" isInvalid={form.errors.chol}>
										<FormLabel>Cholesterol test</FormLabel>
										<Input
											type="number"
											placeholder="Enter result"
											value={form.values.chol}
											onChange={form.handleChange}
											name="chol"
										/>
										<FormErrorMessage>{form.errors.chol}</FormErrorMessage>
									</FormControl>

									<FormControl id="email" mb="10px" isInvalid={form.errors.crea}>
										<FormLabel>Creatinine test</FormLabel>
										<Input
											type="number"
											placeholder="Enter result"
											value={form.values.crea}
											onChange={form.handleChange}
											name="crea"
										/>
										<FormErrorMessage>{form.errors.crea}</FormErrorMessage>
									</FormControl>

									<FormControl id="email" mb="10px" isInvalid={form.errors.gamma}>
										<FormLabel>Gamma glutamyl transferase</FormLabel>
										<Input
											type="number"
											placeholder="Enter result"
											value={form.values.gamma}
											onChange={form.handleChange}
											name="gamma"
										/>
										<FormErrorMessage>{form.errors.gamma}</FormErrorMessage>
									</FormControl>

									<FormControl id="email" mb="10px" isInvalid={form.errors.prot}>
										<FormLabel>Protein test</FormLabel>
										<Input
											type="number"
											placeholder="Enter result"
											value={form.values.prot}
											onChange={form.handleChange}
											name="prot"
										/>
										<FormErrorMessage>{form.errors.prot}</FormErrorMessage>
									</FormControl>
									<Button type="submit">SUBMIT</Button>
								</form>
							</Stack>
						</Flex>
					</Stack>
				</CardBody>
			</Card>
		</Flex>
	)
}
