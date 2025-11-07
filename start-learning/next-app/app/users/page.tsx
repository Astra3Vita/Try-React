import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
}

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    const users: User[] = await res.json();

  return (
    <>
        <h1>Users</h1>
        
        <table className='table table-auto w-full border-collapse border border-b-slate-700'>
            <thead>
                <tr>
                    <th className='border border-slate-500'>Name</th>
                    <th className='border border-slate-500'>Email</th>
                    <th className='border border-slate-500'>Address</th>
                    <th className='border border-slate-500'>Phone</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: {id: number, name: string, email: string}) => (
                <tr key={user.id}>
                    <td className='border border-slate-500'>{user.name}</td>
                    <td className='border border-slate-500'>{user.email}</td>
                    <td className='border border-slate-500'>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
                    <td className='border border-slate-500'>{user.phone}</td>
                </tr>
            ))}        
            </tbody>
        </table>
    </>

  )
}

export default UserPage