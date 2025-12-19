import { useLocation } from "react-router";

interface PageNameMap {
	[key: string]: string;
}

const pageNames: PageNameMap = {
	"/": "Dashboard",
	"/chargings": "Chargings",
	"/cars": "Cars",
	"/stations": "Stations",
};

const findPageName = (pathname: string): string => {
	if (pageNames[pathname]) {
		return pageNames[pathname];
	}

	const pathSegments = pathname.split("/").filter((segment) => segment !== "");
	let currentPath = "";
	for (const segment of pathSegments) {
		currentPath += `/${segment}`;
		if (pageNames[currentPath]) {
			return pageNames[currentPath];
		}
	}

	return "Dashboard";
};

export const usePageName = (): string => {
	const location = useLocation();

	return findPageName(location.pathname);
};
