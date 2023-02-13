export const SetupTable = ({ data = [] }) => {
  const tableRowClass = `border border-white py-1.5 px-3`
  const tableHeaderRowClass = `border border-white py-1.5 px-3 uppercase font-semibold text-xs`

  return (
    <table className='table-fixed border-collapse min-w-full bg-white'>
      <thead className='bg-brand text-white'>
        <tr>
          <th className={`w-6 text-left ${tableHeaderRowClass}`}></th>
          <th className={`text-left ${tableHeaderRowClass}`}>Трек</th>
          <th className={`text-left ${tableHeaderRowClass}`}>Время</th>
        </tr>
      </thead>
      <tbody className='text-gray-900'>
        {data.map((row, index) => (
          <tr
            key={index}
            className={`${index % 2 ? 'bg-gray-200' : 'bg-gray-50'}`}
          >
            <td className={`w-6 text-left ${tableRowClass}`}>{index + 1}</td>
            <td className={`text-left font-sans font-bold ${tableRowClass}`}>
              {row.track}
            </td>
            <td className={`text-left font-sans font-bold ${tableRowClass}`}>
              {row.time}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
