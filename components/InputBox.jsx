
function InputBox({title, width, type, placeholderVal}) {
  return (
    <label className={`flex ${width ? width : null} flex-col gap-4`}>
        <span className="text-[1rem] font-medium">{title? title : null}</span>
        <input type={type? type : "text"} className="border-2 rounded-md py-3 px-2 mb-3" placeholder={placeholderVal? placeholderVal : null} />
    </label>
  )
}

export default InputBox