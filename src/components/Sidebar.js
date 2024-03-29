import React from "react"
import {
	IconButton,
	Avatar,
	Box,
	CloseButton,
	Flex,
	HStack,
	VStack,
	Icon,
	useColorModeValue,
	Link,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
} from "@chakra-ui/react"
import { FiHome, FiMenu, FiBell, FiChevronDown } from "react-icons/fi"
import { BiBook, BiTestTube } from "react-icons/bi"
import { BsPerson, BsPersonSquare } from "react-icons/bs"
import { FaShieldVirus } from "react-icons/fa"
import { NavLink } from "react-router-dom"
// import { IconType } from "react-icons";
// import { ReactText } from "react";

const LinkItems = [
	{ name: "Home", icon: FiHome, path: "app" },
	{ name: "About", icon: BsPersonSquare, path: "about" },
	{ name: "Patients Profile", icon: BsPerson, path: "home" },
	{ name: "Records", icon: BiBook, path: "patients" },
	// { name: "Trending", icon: FiTrendingUp },
	// { name: "Explore", icon: FiCompass },
	// { name: "Favourites", icon: FiStar },
	// { name: "Settings", icon: FiSettings },
]

export default function Layout({ children }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Box minH="100vh" bg={useColorModeValue("white", "white")}>
			<SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />
			<Box ml={{ base: 0, md: 60 }}>
				{children}
			</Box>
		</Box>
	)
}

const SidebarContent = ({ onClose, ...rest }) => {
	return (
		<Box
			transition="3s ease"
			bg={useColorModeValue("#e8e8e8", "white")}
			borderRight="1px"
			borderRightColor={useColorModeValue("#e8e8e8", "#e8e8e8")}
			w={{ base: "full", md: 60 }}
			pos="fixed"
			h="full"
			{...rest}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					padding: "1em 0 1.5em",
				}}
			>
				<FaShieldVirus size={30} />
			</div>
			<div
				style={{
					padding: "0 1.5em",
				}}
			>
				{LinkItems.map((link) => (
					// <NavLink
					//     to={link.path}
					//     activeClassName="active"
					// >
					<NavItem key={link.name} icon={link.icon} path={link.path}>
						{link.name}
					</NavItem>
					//  </NavLink>
				))}
			</div>
		</Box>
	)
}

const NavItem = ({ icon, children, path, ...rest }) => {
	return (
		<Link
			as={NavLink}
			to={path}
			// activeClassName="active"
			sx={{
				textDecoration: "none",
				backgroundColor: "#e8e8e8",
			}}
			_hover={{
				textDecoration: "none",
				// backgroundColor: "#e8e8e8v",
			}}
		>
			{({ isActive }) => (
				<Flex
					align="center"
					p="2"
					mx="2"
					borderRadius="md"
					role="group"
					cursor="pointer"
					style={{
						color: isActive ? "#000" : "#0000",
						background: isActive ? "#BAD7E9" : "",
						fontWeight: isActive ? "600" : "500",
					}}
					{...rest}
				>
					{icon && (
						<Icon
							mr="4"
							fontSize="16"
							_groupHover={
								{
									// color: "white",
								}
							}
							as={icon}
						/>
					)}
					{children}
				</Flex>
			)}

			<Flex align="center" p="2" mx="2" borderRadius="md" role="group" cursor="pointer" {...rest}>
				{icon && (
					<Icon
						mr="4"
						fontSize="16"
						_groupHover={
							{
								// color: "white",
							}
						}
						as={icon}
					/>
				)}
				{children}
			</Flex>
		</Link>
	)
}

const MobileNav = ({ onOpen, ...rest }) => {
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue("white", "gray.900")}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("#e8e8e8", "#e8e8e8")}
			justifyContent={{
				base: "space-between",
				md: "flex-end",
			}}
			{...rest}
		>
			<IconButton
				display={{ base: "flex", md: "none" }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Text
				display={{ base: "flex", md: "none" }}
				fontSize="2xl"
				fontFamily="monospace"
				fontWeight="bold"
			>
				Logo
			</Text>

			<HStack spacing={{ base: "0", md: "6" }}>
				<IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
				<Flex alignItems={"center"}>
					<Menu>
						<MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
							<HStack>
								<Avatar
									size={"sm"}
									src={
										"https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
									}
								/>
								<VStack
									display={{ base: "none", md: "flex" }}
									alignItems="flex-start"
									spacing="1px"
									ml="2"
								>
									<Text fontSize="sm">Justina Clark</Text>
									<Text fontSize="xs" color="#e8e8e8">
										Admin
									</Text>
								</VStack>
								<Box display={{ base: "none", md: "flex" }}>
									<FiChevronDown />
								</Box>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue("white", "#e8e8e8")}
							borderColor={useColorModeValue("#e8e8e8", "#e8e8e8")}
						>
							<MenuItem>Profile</MenuItem>
							<MenuItem>Settings</MenuItem>
							<MenuItem>Billing</MenuItem>
							<MenuDivider />
							<MenuItem>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	)
}
