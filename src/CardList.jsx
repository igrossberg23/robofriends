import Card from './Card';

export default function CardList({ users }) {
	return (
		<div
			className='grid gap-4 w-full'
			style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr)' }}>
			{users.map((user) => (
				<Card
					key={user.id}
					id={user.id}
					name={user.name}
					email={user.email}
				/>
			))}
		</div>
	);
}
