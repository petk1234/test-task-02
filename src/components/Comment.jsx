export default function Comment({ commentFromServer }) {
  return (
    <li key={commentFromServer.id}>
      <p>{commentFromServer.date}</p>
      <p>{commentFromServer.comment}</p>
    </li>
  );
}
