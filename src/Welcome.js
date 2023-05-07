import {
	Card,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	Select,
	Button,
	patient,
	prediction,
	Text,
} from "@chakra-ui/react"
import React from "react"

import { useFormik } from "formik"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
import Patients from "components/PatientWrapper"
import patients from "data/patients.json"
export default function Welcome() {
	const navigate = useNavigate()

	const form = useFormik({
		onSubmit: (SUBMIT) => {
			navigate("/dashboard/about")
		},
	})
	return (
		<Flex
			background="linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url('/images/Rectangle 12.png')"
			backgroundSize="cover"
			// backgroundColor={"white"}
			gap={19}
			wrap="wrap"
			p={"4"}
		>
			<Card w="10000px" h="600" background="none" color={"white"}>
				{" "}
				{/* <img src={"/images/Rectangle 12.png"} /> */}
				<Text w="15" h="100" fontSize={25}>
					<b>Welcome,</b>
				</Text>
				<Text w="15" h="" fontSize={20} fontStyle={"TimesNewRoman"}>
					<b>This website project deals with managing and reducing the workload of health</b>
				</Text>
				<Text w="15" h="" fontSize={20}>
					<b>care workers by predicting if a patient is infected with hepatitis, cirrhosis or</b>
				</Text>
				<Text w="15" h="" fontSize={20}>
					<b>fibrosis. It also predicts, if a patient is a blood donor or suspect blood donor,</b>
				</Text>
				<Text w="15" h="" fontSize={20}>
					<b>This website was developed as a Hepatitis C Virus detection system using</b>
				</Text>
				<Text w="15" h="" fontSize={20}>
					<b>machine learning models</b>
				</Text>
				<CardFooter>
					<Button
						colorScheme={"purple"}
						type="next"
						w="100px"
						onClick={() => navigate("/dashboard/about")}
					>
						NEXT
					</Button>
				</CardFooter>
			</Card>
		</Flex>
	)
}
