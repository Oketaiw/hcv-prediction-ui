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
		<Card w="400px" backgroundColor="white" p="4">
			{showText && (
				<Text>
					{" "}
					<b>View a summary of all your customers over the last month</b>
				</Text>
			)}
			<CardBody>
				<CardHeader backgroundColor="white" h="7" w="300">
					<Text>
						<b>Patient information</b>
					</Text>
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
							<Card backgroundColor="#e8e8e8" w="s" h="12" p="0.5">
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
