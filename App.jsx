import { useEffect, useState } from "react";

function ProfileCard({ name, role, likes }) {
  return (
    <div className="bg-white/10 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-300">{role}</p>
      <p className="mt-2">❤️ {likes} Likes</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-6">
      <h2 className="text-xl mb-2">Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 px-4 py-2 rounded mr-2"
      >
        +
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 px-4 py-2 rounded"
      >
        -
      </button>
    </div>
  );
}

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/profiles")
      .then((res) => res.json())
      .then(setProfiles);
  }, []);

  const addProfile = async () => {
    const res = await fetch("http://localhost:5000/api/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, role, likes: 0 }),
    });
    const data = await res.json();
    setProfiles([...profiles, data]);
    setName("");
    setRole("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🌟 Starschema Week 2 Project</h1>

      <div className="flex justify-center gap-2 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="p-2 text-black rounded"
        />
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          className="p-2 text-black rounded"
        />
        <button onClick={addProfile} className="bg-pink-600 px-4 py-2 rounded">
          Add
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((p) => (
          <ProfileCard key={p.id} {...p} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Counter />
      </div>
    </div>
  );
}
