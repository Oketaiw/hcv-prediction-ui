import { Card, CardBody, CardHeader, CardFooter, Heading, Text, Button, Flex, } from '@chakra-ui/react';
import React from "react";


export default function Result() {
	
	return (
		<Flex 
		gap={7}
		wrap="wrap"
		                   // justifyContebt="space-between"
						   // templateColumns="repeat(auto-fill, 3fr)"
						   >
							<Card w="xs" backgroundColor='white'>
								<CardBody>
							<CardHeader><Card backgroundColor='lightblue' h='12' w='20vw'><Heading size='md'>MEDICAL HISTORY</Heading></Card></CardHeader>

										
						<CardHeader><Card backgroundColor='lightblue' w='20vw' h='12' size='md'><Heading size="md">
										PATIENTS</Heading>
									<Text>Search</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Oke T.</b>
									</Text> 
									<Text>42 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Iyiade S.</b>
									</Text>
									<Text>21 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
									Obatimehin R.</b>
									</Text>
									<Text>22 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Ilekoya D.</b>
									</Text>
									<Text>14 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										GeorgE E.</b>
									</Text>
									<Text>19 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Oduwole O.</b>
									</Text>
									<Text>27 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Olaiya K.</b>
									</Text>
									<Text>31 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Adeleye M.</b>
									</Text>
									<Text>34 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Raji I.</b>
									</Text>
									<Text>22 years</Text>
									</Card></CardHeader>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='12' ><Text><b>
										Ayodele A.</b>
									</Text>
									<Text>20 years</Text>
									</Card></CardHeader>
									
									</CardBody>
									<CardFooter>
										<Button>Start</Button>
									</CardFooter>
									</Card>


									<Card w="xl" h="1200">    
									<CardBody> 
									<Text><b>
										PATIENTS PROFILE
										</b></Text>
								<CardHeader><Card backgroundColor='lightblue' w='s' h='200' ><Text><b>
										oke</b>
									</Text></Card></CardHeader>
									
									
									<Text><b>
										DETAILED DIAGNOSIS
										</b></Text>

									<CardHeader><Card backgroundColor='lightblue' w='s' h='200' ><Text><b>
										oke</b>
									</Text></Card></CardHeader>
									
									</CardBody>
									<CardFooter>
										<Button>Start</Button>
									</CardFooter>
                                    </Card>
						   </Flex>
	);
}