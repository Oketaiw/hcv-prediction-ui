import {FormControl,Stack,FormErrorMessage,FormLabel,Input,CardBody,Card,CardFooter,CardHeader,Flex,Heading,Select,Button,patient,prediction

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
		gap={7}
			wrap="wrap"

		>
<Card>
	<Text>
		Welcome
		This website is a detection system for detecting hepatitis C virus amongst other related diseases.
		It is developed by Oke Taiwo and Iyiade Suliat
		With the aid of Machine Learning for the model and React for the website.taiwogt jiyuyrrewwssd
	</Text>
</Card>
		
			<Card>
					<CardFooter>
						<Button colorScheme={"purple"} type="next" onClick={() =>navigate("/dashboard/home")}>NEXT</Button>
					</CardFooter>
				
			</Card>
		</Flex>
	)
}
