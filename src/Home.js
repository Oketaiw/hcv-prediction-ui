import { Card, CardBody, CardHeader, CardFooter, Heading, Text, Button, Flex } from '@chakra-ui/react';
import React from 'react'

export default function Home() {
  return (
		<Flex
          gap={7}
          wrap="wrap"
			// justifyContent="space-between"

			// templateColumns="repeat(auto-fill, 3fr)"
		>
			<Card>
				<CardHeader>
					<Heading size="md"> HCV TEST </Heading>
				</CardHeader>
				<CardBody>
					<Text>
						View a summary of all your customers over the
						last month.
					</Text>
				</CardBody>
				<CardFooter>
					<Button>Start</Button>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<Heading size="md"> ACL TEST</Heading>
				</CardHeader>
				<CardBody>
					<Text>
						View a summary of all your customers over the
						last month.
					</Text>
				</CardBody>
				<CardFooter>
					<Button>Start</Button>
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
