import { useNavigate } from "react-router-dom"
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
	const navigate = useNavigate()
	const location = useLocation()

const patient = location.state?.patient
const prediction =location.state?.prediction

	if (!patient || !prediction){
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
			
			<Card w="xl" h="1200"> <img src={"./images/image 5.png"}/>	
				<CardBody>
					<Text>
						<b>PATIENTS PROFILE</b>
					</Text>
					<CardHeader>
						<Card backgroundColor="white" w="s" h="150">
							<Text>
							Patients name:	<b>{patient.full_name}</b>
							</Text>
							<Text>
							Patient Age:<b>{patient.age}</b>
							</Text>
							<Text>
								Gender: <b>{patient.gender}</b>
							</Text>
							<Text>
								Blood Group: <b>{patient.bloodgroup}</b>
							</Text>
							<Text>
								Genotype:<b>{patient.genotype}</b>
							</Text>
						</Card>
					</CardHeader>

					<Text>
						<b>Diagnosis</b>
					</Text>

					<CardHeader>
						<Card backgroundColor="white" w="s" h="50">
							<Text colorScheme="red">
							RESULT:	<b> {prediction}</b>
							</Text>
						</Card>
					</CardHeader>
					<CardFooter>
						<Button colorScheme={"purple"} type="next"  w="400px" onClick={() =>navigate("/dashboard/patients")}>Save</Button>
					</CardFooter>
				</CardBody>
			</Card>
		</Flex>
	)
}
