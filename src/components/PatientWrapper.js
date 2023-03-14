import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
	FormErrorMessage,
	Card,
	CardBody,
	CardHeader,
	Text,
	Heading,
} from "@chakra-ui/react"

export default function Patients({ showText, patients, onSelect }) {
	return (
		<Card w="xs" backgroundColor="white">
			{showText && <Text>View a summary of all your customers over the last month</Text>}
			<CardBody>
				<CardHeader>
					<Card backgroundColor="lightblue" h="12" w="20vw">
						<Heading size="md">MEDICAL HISTORY</Heading>
					</Card>
				</CardHeader>

				<CardHeader>
					<Card backgroundColor="lightblue" w="20vw" h="12" size="md">
						<Heading size="md">PATIENTS</Heading>
						<Text>Search</Text>
					</Card>
				</CardHeader>
				{patients.map(({ name, age, gender, bloodGroup, genotype }, idx) => {
					return (
						<CardHeader
							style={{
								cursor: "pointer",
							}}
							onClick={() => {
								if (onSelect instanceof Function) {
									onSelect({ age, name, gender, bloodGroup, genotype })
								}
							}}
							key={idx}
						>
							<Card backgroundColor="lightblue" w="s" h="12">
								<Text>
									<b>{name}</b>
								</Text>
								<Text>{age} years</Text>
							</Card>
						</CardHeader>
					)
				})}
			</CardBody>
		</Card>
	)
}
