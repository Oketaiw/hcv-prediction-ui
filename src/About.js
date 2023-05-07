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
	Image,
	Text,
	BackgroundImage,
} from "@chakra-ui/react"
import React from "react"

import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
export default function About() {
	const navigate = useNavigate()

	const form = useFormik({
		onSubmit: (SUBMIT) => {
			navigate("/dashboard/home")
		},
	})
	return (
		<Flex
			background="linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url('/images/background.jpg')"
			backgroundSize="cover"
			backgroundRepeat={"no-repeat"}
			p="4"
			backgroundColor={"white"}
			gap={19}
			wrap="wrap"
			h={"100vh"}
		>
			<Card w="100%" mx="auto" my={4} p={4} boxShadow="none" background="none">
				<Flex
					flexDirection={"row-reverse"}
					flexWrap={["wrap", "nowrap"]}
					alignItems={["flex-start", "center"]}
					w="100%"
					justifyContent={["center", "space-evenly"]}
				>
					<Image borderRadius="full" boxSize={200} src="/images/1.jpeg" alt="" mr={[2, 4]} />
					<Flex
						flexWrap={"wrap"}
						flexDirection="column"
						justifyContent="center"
						mr={[2, 4]}
						fontWeight="bold"
					>
						<Text fontSize="xl" mb={1}>
							Suliat Iyiade
						</Text>
						<Text fontSize="md" mb={1}>
							A computer Engineering Graduate of Olabisi Onabanjo University.
						</Text>
						<Text fontSize="md" mb={1}>
							Skills: Python (Data Science), UI/UX
						</Text>
						<Text fontSize="md">09037669350</Text>
					</Flex>
				</Flex>
			</Card>
			<Card w="100%" mx="auto" my={4} p={4} boxShadow="none" background="none">
				<Flex
					flexWrap={["wrap", "nowrap"]}
					alignItems={["flex-start", "center"]}
					w="100%"
					justifyContent="space-evenly"
				>
					<Image borderRadius="full" boxSize={200} src="/images/2.jpeg" alt="" mr={[2, 4]} />
					<Flex flexDirection="column" justifyContent="center" mr={[2, 4]} fontWeight="bold">
						<Text fontSize="xl" mb={1}>
							Oke Taiwo
						</Text>
						<Text fontSize="md" mb={1}>
							A computer Engineering Graduate of Olabisi Onabanjo University.
						</Text>
						<Text fontSize="md" mb={1}>
							Skills: Full stack Developer(React,FastAPI,Vercel & Render)
						</Text>
						<Text fontSize="md">07025242616</Text>
					</Flex>
				</Flex>
			</Card>
			<Button
				colorScheme={"purple"}
				type="next"
				w="100px"
				onClick={() => navigate("/dashboard/home")}
			>
				NEXT
			</Button>
		</Flex>
	)
}
