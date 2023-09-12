'use client'
import Link from 'next/link'

const Users = ({users}) => {
  return (
    <ul>
            {users.map(u => (
                <Link key={u.id} href={`/users/${u.id}`}>
                <li  className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between">
                    <div className="text-center">
                        <h5 className="font-bold">{u.id} {u.fist_name} {u.last_name}</h5>
                        <p className="mt-2 text-slate-100"> email: {u.email}</p>
                    </div>
                        <img src={u.avatar} alt="" className="rounded-full w-20" />
                </li>
                </Link>
            ) )}
        </ul>
  )
}

export default Users