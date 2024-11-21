import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
const MobileNavBar = () => {

	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<HamburgerMenuIcon />
			</Dialog.Trigger>

			<Dialog.DialogPortal>
				<Dialog.Content>Make changes to your profile.</Dialog.Content>
			</Dialog.DialogPortal>
		</Dialog.Root>
	);
};

export default MobileNavBar;
