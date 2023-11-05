import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"


function Alert() {
  const {alert} = useContext(AlertContext)
  return alert !== null && (
    <p className="flex items start mb-4 space-x-2">
      {alert.type === 'error' && (
        <svg id="changeColor" fill="#DC7633" 
        xmlns="http://www.w3.org/2000/svg" 
        //xmlns:xlink="http://www.w3.org/1999/xlink" 
        width="35" zoomAndPan="magnify" 
        viewBox="0 0 375 374.9999" 
        height="35" preserveAspectRatio="xMidYMid meet" 
        version="1.0">
          <defs>
            <path id="pathAttribute" 
            d="M 7.09375 7.09375 L 367.84375 7.09375 L 367.84375 367.84375 L 7.09375 367.84375 Z M 7.09375 7.09375 ">
              </path></defs><g><path 
              id="pathAttribute" 
              d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 " 
              fill-opacity="1" fill-rule="nonzero"></path></g>
              <g id="inner-icon" transform="translate(85, 75)"> 
              
              <svg width="200" height="200" 
              viewBox="0 0 48 48" fill="none" 
              xmlns="http://www.w3.org/2000/svg" id="IconChangeColor">
                <rect width="48" height="48" fill="white" fill-opacity="0.01">
                  </rect><path d="M14 14L34 34" stroke="#333" 
                  stroke-width="1" stroke-linecap="round" 
                  stroke-linejoin="round" 
                  id="mainIconPathAttribute" 
                  fill="#ffffff"></path>
                  <path d="M14 34L34 14" 
                  stroke="#333" stroke-width="1" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  id="mainIconPathAttribute" 
                  fill="#ffffff">
                    </path></svg> 
                    </g></svg>
      )}
      <p className="flex-1 text-base font-semibold leading-7 text-white">
        <strong>{alert.msg}</strong>
      </p>
    </p>
  )
}

export default Alert