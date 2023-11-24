import {HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineUsers,
    HiOutlineCog} from "react-icons/hi"


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'enrollment',
		label: 'Enrollment',
		path: '/enrollment',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'course',
		label: 'Course',
		path: '/course',
		icon: <HiOutlineCube />
	},
    {
		key: 'branch',
		label: 'Branch',
		path: '/branch',
		icon: <HiOutlineUsers />
	},
	{
		key: 'user',
		label: 'User',
		path: '/users',
		icon: <HiOutlineCog />
	}
]

