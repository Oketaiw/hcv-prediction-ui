import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	
	Text,
	Button,
	Flex,
} from "@chakra-ui/react"
import Patients from "components/PatientWrapper"
import React from "react"
import patients from "data/patients.json"
import { useLocation } from "react-router-dom"

export default function Result() {
	const location = useLocation()

	const patient = location.state?.patient
	const prediction = location.state?.prediction

	if (!patient || !prediction) {
		return (
			<div>This page was accessed incorrectly, make sure you were redirect from the test page.</div>
		)
	}
	return (
		<Flex
			gap={7}
			wrap="wrap"
			// justifyContebt="space-between"
			// templateColumns="repeat(auto-fill, 3fr)"
		>
			<Card w="xs" backgroundColor="white">
				<Patients patients={patients} />
				<CardFooter>
					<Button>Start</Button>
				</CardFooter>
			</Card>

			<Card w="xl" h="1200">
				<CardBody>
					<Text>
						<b>PATIENTS PROFILE</b>
					</Text>
					<CardHeader>
						<Card backgroundColor="lightblue" w="s" h="150">
							<Text>
							Full name:	<b>{patient.full_name}</b>
							</Text>
							<Text>
							AGE:<b>{patient.age}</b>
							</Text>
							<Text>
								GENDER: <b>{patient.gender}</b>
							</Text>
							<Text>
								Bloodgroup: <b>{patient.bloodgroup}</b>
							</Text>
							<Text>
								Genotype:<b>{patient.genotype}</b>
							</Text>
						</Card>
					</CardHeader>

					<Text>
						<b>DETAILED DIAGNOSIS</b>
					</Text>

					<CardHeader>
						<Card backgroundColor="lightblue" w="s" h="50">
							<Text>
							RESULT:	<b>{prediction}</b>
							</Text>
						</Card>
					</CardHeader>
				</CardBody>
			</Card>
		</Flex>
	)
}
