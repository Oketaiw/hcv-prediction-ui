import {Card,CardFooter,CardHeader,Flex,Heading,Select,Button,patient,prediction,Text

} from "@chakra-ui/react"
import React from "react"

import { useFormik } from "formik"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
import Patients from "components/PatientWrapper"
import patients from "data/patients.json"
export default function About() {
    const navigate = useNavigate()

    const form = useFormik({
	onSubmit:(SUBMIT) => { 
      navigate("/dashboard/home", )
		},
    })
	return (
		<Flex
		backgroundColor={"white"}
		gap={19}
			wrap="wrap"

		>
<Card w="10000px" h="600">
	<Text w="15" h="" fontSize={25}>
		<b>Welcome</b>
		</Text>
		<Text w="15" h="" fontSize={25}>
		<b>This website is a detection system for detecting hepatitis C virus amongst other related diseases.</b>
		</Text>
		<Text w="15" h="" fontSize={25}>
		<b>It is developed by Oke Taiwo and Iyiade Suliat</b>
		</Text>
		<Text w="15" h="" fontSize={25}>
		<b>With the aid of Machine Learning for the model and React for the website.</b>
	</Text>

					<CardFooter>
						<Button colorScheme={"purple"} type="next"  w="400px" onClick={() =>navigate("/dashboard/home")}>NEXT</Button>
					</CardFooter>
				
			</Card>
		</Flex>
	)
}
