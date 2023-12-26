

export default function Tooltip({ text }) {
    return (<span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-2 text-xs whitespace-nowrap text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 -translate-y-16 opacity-0 py-1 m-2 mx-auto">{text}</span>);
}