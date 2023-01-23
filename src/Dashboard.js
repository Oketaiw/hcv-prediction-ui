import { Box } from "@chakra-ui/react";
import Layout from "components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard({children}) {
	return (
		<Box>
			<Layout>
				<Box> <Outlet/> </Box>
			</Layout>
		</Box>
	);
}
