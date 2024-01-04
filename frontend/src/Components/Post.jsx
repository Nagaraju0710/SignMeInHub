// import React, { useState } from "react";
// import de from '../Imges/de.png'

// const Post = ({uname, uemail,uphone, device, _id, updateHandler, deleteHandler }) => {
//   const [username, setUserName] = useState(uname);
//   const [useremail, setUserEmail] = useState(uemail);
//   const [userphone,setUserPhone]=useState(uphone)
//   const [editing, setEditing] = useState(false);
//   const [deviceValue, setDeviceValue] = useState(device);

//   const { isAuth, name, token } = JSON.parse(localStorage.getItem("user")) || {
//     name: false,
//     isAuth: false,
//     token: false,
//   };

//   const handleUpdate = () => {
//     setEditing(true);
//   };

//   return (
//     <div className='post'>
//       {editing ? (
//         <input
//           onChange={(e) => setUserName(e.target.value)}
//           type='text'
//           value={username}
//         />
//       ) : (
//         <h2 style={{fontSize: '1.2rem',marginBottom: '1rem', color: '#215b99'}} >{uname}</h2>
//       )}
//       {editing ? (
//         <input
//           onChange={(e) => setUserPhone(e.target.value)}
//           type='text'
//           value={userphone}
//         />
//       ) : (
//         <h2 style={{fontSize: '1.2rem',marginBottom: '1rem', color: '#215b99'}} >{uname}</h2>
//       )}
//       {editing ? (
//         <textarea
//           onChange={(e) => setUserEmail(e.target.value)}
//           value={useremail}
//           cols='10'
//           rows='4'
//         >
//           {uemail}
//         </textarea>
//       ) : (
//         <p>{uemail}</p>
//       )}

//       <div className="post-icon">
//         {editing ? (
//           <button
//             style={{ background: "#4696FF" }}
//             onClick={() => {
//               setEditing(true);
//               updateHandler(
//                 { uname: username, uemail: useremail, uphone:userphone , device: deviceValue },
//                 _id,
//                 token
//               );
//             }}
//             className='btn'
//           >
//             update
//           </button>
//         ) : (
//           <button
//             style={{ background: "#4696FF" }}
//             onClick={handleUpdate}
//             className='btn'
//           >
//             edit
//           </button>
//         )}

//         <button
//           style={{ background: "#4696FF" }}
//           onClick={() => deleteHandler(_id, token)}
//           className='btn'
//         >
//           delete
//         </button>

//         <img
//           className='delete-img'
//           onClick={() => deleteHandler(_id, token)}
//           src={de}
//           alt=''
//         />
//       </div>
//     </div>
//   );
// };

// export default Post;
