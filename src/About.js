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
			gap={7}
			wrap="wrap"
			// justifyContent="space-between"
			// templateColumns="repeat(auto-fill, 3fr)"
		>
			<Card>
					<CardFooter>
						<Button type="submit" onClick={() =>navigate("/dashboard/home")}>SUBMIT</Button>
					</CardFooter>
				
			</Card>
		</Flex>
	)
}
