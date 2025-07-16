export default function Jumper(ObjectID, ObjectPosition) {
  const e = document.getElementById(ObjectID);
  e.scrollIntoView({
    behavior: "smooth",
    block: ObjectPosition,
  });
}
