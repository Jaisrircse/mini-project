export default function ProfileCard({ name, role, likes }) {
  return (
    <div className="bg-white/10 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-300">{role}</p>
      <p className="mt-2">❤️ {likes} Likes</p>
    </div>
  );
}
