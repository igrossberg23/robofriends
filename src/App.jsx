import { useEffect, useState, useMemo } from 'react';
import SearchBar from './SearchBar';
import CardList from './CardList';
import './App.css';
import Scroll from './Scroll';

export default function App() {
	const [search, setSearch] = useState('');
	const [users, setUsers] = useState([]);
	const [error, setError] = useState('');

	const fetchUsers = async () => {
		try {
			const res = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await res.json();

			setUsers(data);
			setError('');
		} catch (err) {
			console.log(err);
			setError(err.message ?? 'Unknown error occurred');
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const filteredUsers = useMemo(
		() =>
			users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase())),
		[search, users]
	);

	return (
		<div className='w-full'>
			<header>
				<h1 className='text-emerald-300 text-2xl'>Robot Friend Finder</h1>
			</header>
			<br />
			<br />
			<section className='w-full'>
				<SearchBar
					search={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<br />
				<br />
				<Scroll>
					{users ? <CardList users={filteredUsers} /> : <Error error={error} />}
				</Scroll>
			</section>
		</div>
	);
}
