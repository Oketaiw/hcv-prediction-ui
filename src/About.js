import {Card,CardFooter,CardHeader,Flex,Heading,Select,Button,patient,prediction,Text,BackgroundImage

} from "@chakra-ui/react"
import React from "react"

import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
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
<Card w="10000px" h="600"> <img src={"./images/background.jpg"}/>
	<Text w="15" h="" fontSize={20}>
			<b>Suliat Iyiade</b>
		</Text>
		<Text w="15" h="" fontSize={20}>
		<b>A computer Engineering Graduate of Olabisi Onabanjo University.</b>
		</Text>
		<Text w="15" h="" fontSize={20}>
		<b>Skills: Python (Data Science), UI/UX</b>
		</Text>
		<Text w="15" h="200" fontSize={20}>
		<b>09037669350</b>
	</Text> 

	<Text w="15" h="" fontSize={20}>
			<b>Oke Taiwo</b> 
		</Text>
		<Text w="15" h="" fontSize={20}>
		<b>A computer Engineering Graduate of Olabisi Onabanjo University.</b>
		</Text>
		<Text w="15" h="" fontSize={20}>
		<b>Skills: Full stack Developer(React,FastAPI,Vercel & Render)</b>
		</Text>
		<Text w="15" h="" fontSize={20}>
		<b>07025242616</b>
	</Text>

					<CardFooter>
						<Button colorScheme={"purple"} type="next"  w="100px" onClick={() =>navigate("/dashboard/home")}>NEXT</Button>
					</CardFooter>
				
			</Card>
		</Flex>
	)
}
