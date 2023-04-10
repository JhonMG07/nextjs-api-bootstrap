"use client"
//cualquier interactividad tenemos que usar el useclient
import {useRouter} from "next/navigation"
function Users({ user }) {

    const router = useRouter();
  return (
    <ul className="list-group">
      {user.map((user) => (
        // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <li
          className=" list-group-item d-flex justify-content-between
          aling-items-center
          list-group-item-action"
          key={user.id}
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <div>
            <h5>
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img src={user.avatar} alt={user.email} style={{borderRadius: "50%"}} />
        </li>
      ))}
    </ul>
  );
}

export default Users;
