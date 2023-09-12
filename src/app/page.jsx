import Users from '@/components/Users/Users'

async function fetchUser(){
    const res = await fetch('https://reqres.in/api/users')
    const data  = await res.json()

    return data.data
}

export default async function Home() {
    const users = await fetchUser()

    return (
        <Users users={users}/>
    )
  }