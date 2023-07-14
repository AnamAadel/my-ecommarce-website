
function ContactAddress({title,imgName , children }) {
  return (
    <div
            class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-5"
          >
            <img src={`./assets/shop_images/${imgName}`} alt="" class="px-10" />
            <address class="not-italic">
              <h5 class="font-medium text-[1.5rem]">{title}</h5>
                {children}
            </address>
          </div>
  )
}

export default ContactAddress