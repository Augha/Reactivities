import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<Menu inverted fixed="top">
			<Container>
				<Menu.Item as={NavLink} to="/" header>
					<img
						src="/assets/logo.png"
						alt="logo"
						style={{ marginRight: "10px" }}
					/>
					Reactivities
				</Menu.Item>
				<Menu.Item name="Activities" as={NavLink} to="/activities" />
				<Menu.Item>
					<Button
						positive
						content="Create Activity"
						as={NavLink}
						to="/createActivity"
					/>
				</Menu.Item>
			</Container>
		</Menu>
	);
}
