
function SelectInput({title, optionVal}) {
  return (
    <>
        <label className="flex flex-col gap-4">
              <span className="text-[1rem] font-medium"
                >{title}</span>
              <select className="border-2 rounded-md py-3 px-2 mb-3 text-gray-400"
              > {optionVal && optionVal.map((name, index)=> <option value={name} key={index}>{name}</option> )}
              </select>
        </label>
    </>
  )
}

export default SelectInput