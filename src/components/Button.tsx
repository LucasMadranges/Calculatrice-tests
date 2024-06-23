export default function Button({children}) {
    return (
        <button className="bg-gray-300 p-2 rounded-lg w-10 hover:bg-gray-400 transition">
            {children}
        </button>
    );
}