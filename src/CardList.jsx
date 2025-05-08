import Card from './Card';
import { useMemo } from 'react';

export default function CardList({ users }) {
	const seed = useMemo(() => Math.floor(Math.random() * 10000), []);

	return (
		<div
			className='grid gap-4 w-full'
			style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr)' }}>
			{users.map((user) => (
				<Card
					key={user.id}
					id={user.id + seed}
					name={user.name}
					email={user.email}
				/>
			))}
		</div>
	);
}
