import { Card, CardBody, CardHeader, CardFooter, Heading, Text, Button, Flex } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate()
  return (
		<Flex
          gap={7}
          wrap="wrap"
			// justifyContent="space-between"

			// templateColumns="repeat(auto-fill, 3fr)"
		>
			<Card w="xs">
				<CardHeader>
					<Heading size="md"> HEPATITIS TEST </Heading>
				</CardHeader>
				<CardBody>
					<Text>
						View a summary of all your customers over the
						last month.
					</Text>
				</CardBody>
				<CardFooter>
					<Button onClick={() => navigate("/dashboard/text")
					}>Start</Button>
				</CardFooter>
			</Card>
			<Card w="xs">
				<CardHeader>
					<Heading size="md"> FIBROSIS TEST</Heading>
				</CardHeader>
				<CardBody>
					<Text>
						View a summary of all your customers over the
						last month.
					</Text>
				</CardBody>
				<CardFooter>
				<Button onClick={() => navigate("/dashboard/text")
					}>Start</Button>
				</CardFooter>
			</Card>
			<Card w="xs">
				<CardHeader>
					<Heading size="md"> CIRRHOSIS TEST</Heading>
				</CardHeader>
				<CardBody>
					<Text>
						View a summary of all your customers over the
						last month.
					</Text>
				</CardBody>
				<CardFooter>
				<Button onClick={() => navigate("/dashboard/text")
					}>Start</Button>
				</CardFooter>
			</Card>
			{/* <Card>
				<CardHeader>
					<Heading size="md"> Customer dashboard</Heading>
				</CardHeader>
				<CardBody>
					<Text>
						View a summary of all your customers over the
						last month.
					</Text>
				</CardBody>
				<CardFooter>
					<Button>View here</Button>
				</CardFooter>
			</Card> */}
		</Flex>
	);
}
