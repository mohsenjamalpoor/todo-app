

function MyModal({isVisible, onClose, children}) {
    if(!isVisible) return null;
    const handleClose = (e) => {
       if(e.target.id === 'wrapper') onClose(); 
    }
  return (
    <div id="wrapper" onClick={handleClose}  className={`fixed inset-0 flex justify-center items-center  bg-gray-400 opacity-90 backdrop-blur-sm
    `}>
        <div  className={`w-[300px] flex flex-col `}>
                
                <div  className="bg-white p-2 rounded font-bold">
                    {children}
                </div>
                

      
        </div>
    </div>
  )
}

export default MyModal

