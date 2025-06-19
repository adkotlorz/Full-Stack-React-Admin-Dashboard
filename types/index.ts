export declare interface BaseUser {
	id: string;
	name: string;
	email: string;
	dateJoined: string;
	imageUrl: string;
}

export declare interface UserData extends BaseUser {
	itineraryCreated: number | string;
	status: "user" | "admin";
}

export declare type User = BaseUser;

export declare interface Country {
	name: string;
	coordinates: [number, number];
	value: string;
	openStreetMap?: string;
}

export declare interface DropdownItem {
	name: string;
}

export declare interface SelectProps {
	data: Country[] | DropdownItem[];
	onValueChange: (value: string) => void;
	id: string;
	label: string;
	placeholder: string;
}

export declare interface PillProps {
	text: string;
	bgColor?: string;
	textColor?: string;
}

export declare interface Activity {
	time: string;
	description: string;
}

export declare interface DayPlan {
	day: number;
	location: string;
	activities: Activity[];
}

export declare interface Location {
	city: string;
	coordinates: [number, number];
	openStreetMap: string;
}

export declare interface Trip {
	id: string;
	name: string;
	description: string;
	estimatedPrice: string;
	duration: number;
	budget: string;
	travelStyle: string;
	interests: string;
	groupType: string;
	country: string;
	imageUrls: string[];
	itinerary: DayPlan[];
	bestTimeToVisit: string[];
	weatherInfo: string[];
	location: Location;
	payment_link: string;
}

export declare interface TripCardProps {
	id: string;
	name: string;
	location: string;
	imageUrl: string;
	tags: string[];
	price: string;
}

export declare interface StatsCard {
	headerTitle: string;
	total: number;
	lastMonthCount: number;
	currentMonthCount: number;
}

export declare interface TrendResult {
	trend: "increment" | "decrement" | "no change";
	percentage: number;
}

export declare interface DashboardStats {
	totalUsers: number;
	usersJoined: {
		currentMonth: number;
		lastMonth: number;
	};
	userRole: {
		total: number;
		currentMonth: number;
		lastMonth: number;
	};
	totalTrips: number;
	tripsCreated: {
		currentMonth: number;
		lastMonth: number;
	};
}

export declare interface CreateTripResponse {
	id?: string;
}

export declare interface DestinationProps {
	containerClass?: string;
	bigCard?: boolean;
	activityCount: number;
	rating: number;
	bgImage: string;
	title: string;
}

export type GetAllTripsResponse = {
	allTrips: Models.Document[];
	total: number;
};

export declare interface UsersItineraryCount {
	imageUrl: string;
	name: string;
	count: number;
}

export declare interface TripsInterest {
	imageUrl: string;
	name: string;
	interest: string;
}

export declare interface InfoPillProps {
	text: string;
	image: string;
}

export declare interface TripFormData {
	country: string;
	travelStyle: string;
	interest: string;
	budget: string;
	duration: number;
	groupType: string;
}