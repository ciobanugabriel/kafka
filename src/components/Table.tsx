import Header from './table/Header';
import { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
    const items = useSelector((state: RootState) => state.tableData.items)
    console.log("items from redux are: " + items);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <Header title={"Title"}/>
                    <Header title={"Description"}/>
                    <Header title={"Owner"}/>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.title}
                        </th>
                        <td className="px-6 py-4">
                            {item.description}
                        </td>
                        <td className="px-6 py-4">
                            {item.owner}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}

export default Table;