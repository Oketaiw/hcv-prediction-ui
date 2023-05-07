import { Flex } from "@chakra-ui/react"
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
		validationSchecoma: schema,
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
			gap={5}
			wrap="wrap"
			// justifyContent="space-between"
			// templateColumns="repeat(auto-fill, 3fr)"
			background="url('/images/Rectangle 12 (1).png')"
			p="4"
		>
			<Patients
				// src={"./images/blob 1.png"}
				w="xl"
				h="1200"
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

					form.submitForm()
				}}
			/>
		</Flex>
	)
}
