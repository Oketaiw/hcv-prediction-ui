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
			{showText && <Text> <b>View a summary of all your customers over the last month</b></Text>}
			<CardBody>
				<CardHeader>
					<Card backgroundColor="#e8e8e8" h="12" w="20vw">
						<Heading size="md">MEDICAL HISTORY</Heading>
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
							<Card backgroundColor="#e8e8e8" w="s" h="12">
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
