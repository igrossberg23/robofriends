export default function Card({ id, name, email }) {
	return (
		<div className='bg-emerald-500 rounded-md p-2 hover:scale-105 cursor-pointer'>
			<img
				src={`https://robohash.org/${id}`}
				alt='robot'
				width={200}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}
